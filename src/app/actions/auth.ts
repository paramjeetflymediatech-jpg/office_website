'use server';

import { login as startSession, logout as endSession } from '@/lib/auth';
import { User, sequelize } from '@/models';
import { redirect } from 'next/navigation';
import fs from 'fs';
import path from 'path';

function cleanString(val?: string | null): string {
  if (!val) return '';
  let s = val.trim();
  // Strip surrounding double or single quotes
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1);
  }
  return s.trim();
}

// Read fresh values from .env directly on disk at runtime, supporting all common key names
function getEnvCredentials() {
  const fileEnv: Record<string, string> = {};
  try {
    const envPath = path.join(process.cwd(), '.env');
    if (fs.existsSync(envPath)) {
      const content = fs.readFileSync(envPath, 'utf8');
      for (const line of content.split('\n')) {
        const trimmed = line.trim();
        if (!trimmed || trimmed.startsWith('#')) continue;
        const eqIdx = trimmed.indexOf('=');
        if (eqIdx !== -1) {
          const key = trimmed.slice(0, eqIdx).trim();
          const val = trimmed.slice(eqIdx + 1).trim();
          fileEnv[key] = val;
        }
      }
    }
  } catch (e) {
    // ignore read error and fall back to process.env
  }

  const rawUser =
    fileEnv.ADMIN_USERNAME ||
    fileEnv.ADMIN_USER ||
    fileEnv.ADMIN_ID ||
    fileEnv.USERNAME ||
    process.env.ADMIN_USERNAME ||
    process.env.ADMIN_USER ||
    process.env.ADMIN_ID ||
    process.env.USERNAME ||
    'admin';

  const rawPass =
    fileEnv.ADMIN_PASSWORD ||
    fileEnv.ADMIN_PASS ||
    fileEnv.PASSWORD ||
    process.env.ADMIN_PASSWORD ||
    process.env.ADMIN_PASS ||
    process.env.PASSWORD ||
    'admin@123';

  return {
    username: cleanString(rawUser),
    password: cleanString(rawPass),
  };
}

// Ensure the database table has the required columns and sync the admin user
async function syncAdminToDatabase(adminUser: string, adminPass: string) {
  try {
    // 1. Detect existing table name (Users or users)
    const [tables]: any = await sequelize.query(`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME IN ('Users', 'users')
    `);

    let targetTable = 'Users';
    if (tables && tables.length > 0) {
      targetTable = tables[0].TABLE_NAME || tables[0].table_name || 'Users';
    }

    // 2. Inspect existing columns in targetTable
    const [columns]: any = await sequelize.query(`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '${targetTable}'
    `);

    const colNames: string[] = (columns || []).map(
      (c: any) => (c.COLUMN_NAME || c.column_name || '').toLowerCase()
    );

    // If table doesn't exist at all, sync model
    if (colNames.length === 0) {
      await User.sync();
      await User.create({ username: adminUser, password: adminPass });
      console.log(`[Auth] Created ${targetTable} table and added admin user.`);
      return;
    }

    // If username column is missing, add it
    if (!colNames.includes('username')) {
      console.log(`[Auth] Adding missing 'username' column to ${targetTable}...`);
      await sequelize.query(`ALTER TABLE \`${targetTable}\` ADD COLUMN \`username\` VARCHAR(255) NULL;`);
      colNames.push('username');
    }

    // If password column is missing, add it
    if (!colNames.includes('password')) {
      console.log(`[Auth] Adding missing 'password' column to ${targetTable}...`);
      await sequelize.query(`ALTER TABLE \`${targetTable}\` ADD COLUMN \`password\` VARCHAR(255) NULL;`);
      colNames.push('password');
    }

    // 3. Upsert admin record into database
    const [existing]: any = await sequelize.query(
      `SELECT * FROM \`${targetTable}\` WHERE \`username\` = :username LIMIT 1`,
      { replacements: { username: adminUser } }
    );

    if (existing && existing.length > 0) {
      await sequelize.query(
        `UPDATE \`${targetTable}\` SET \`password\` = :password WHERE \`username\` = :username`,
        { replacements: { username: adminUser, password: adminPass } }
      );
      console.log(`[Auth] Updated password in DB for user "${adminUser}" in ${targetTable}`);
    } else {
      await sequelize.query(
        `INSERT INTO \`${targetTable}\` (\`username\`, \`password\`, \`createdAt\`, \`updatedAt\`) VALUES (:username, :password, NOW(), NOW())`,
        { replacements: { username: adminUser, password: adminPass } }
      );
      console.log(`[Auth] Inserted admin user "${adminUser}" into ${targetTable}`);
    }
  } catch (err: any) {
    console.warn('[Auth] Database sync error:', err?.message || err);
  }
}

// Check database credentials safely across possible column schemas
async function checkDatabaseCredentials(inputUser: string, inputPass: string): Promise<boolean> {
  try {
    const [tables]: any = await sequelize.query(`
      SELECT TABLE_NAME 
      FROM INFORMATION_SCHEMA.TABLES 
      WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME IN ('Users', 'users')
    `);

    if (!tables || tables.length === 0) return false;
    const targetTable = tables[0].TABLE_NAME || tables[0].table_name;

    const [columns]: any = await sequelize.query(`
      SELECT COLUMN_NAME 
      FROM INFORMATION_SCHEMA.COLUMNS 
      WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = '${targetTable}'
    `);

    const colNames: string[] = (columns || []).map(
      (c: any) => (c.COLUMN_NAME || c.column_name || '').toLowerCase()
    );

    // Build conditions depending on available columns
    const userField = colNames.includes('username')
      ? 'username'
      : colNames.includes('email')
      ? 'email'
      : colNames.includes('user_name')
      ? 'user_name'
      : null;

    const passField = colNames.includes('password')
      ? 'password'
      : colNames.includes('pass')
      ? 'pass'
      : null;

    if (!userField || !passField) return false;

    const [rows]: any = await sequelize.query(
      `SELECT * FROM \`${targetTable}\` WHERE \`${userField}\` = :user AND \`${passField}\` = :pass LIMIT 1`,
      { replacements: { user: inputUser, pass: inputPass } }
    );

    return rows && rows.length > 0;
  } catch (err: any) {
    console.warn('[Auth] Database check error:', err?.message || err);
    return false;
  }
}

export async function adminLogin(formData: FormData) {
  const username = cleanString(formData.get('username') as string);
  const password = cleanString(formData.get('password') as string);

  const envCreds = getEnvCredentials();

  console.log(`[Auth] Attempting login for username: "${username}"`);

  // .env is the master source of truth
  const isEnvConfigured = Boolean(envCreds.username && envCreds.password);

  let isValid = false;

  if (isEnvConfigured) {
    // STRICT: Only the current .env credentials are valid. Old passwords will NOT work.
    if (username === envCreds.username && password === envCreds.password) {
      isValid = true;
    }
  } else {
    // Fallback only if .env is completely empty/missing
    const matchesDb = await checkDatabaseCredentials(username, password);
    const matchesFallback = username === 'admin' && password === 'admin@123';
    isValid = matchesDb || matchesFallback;
  }

  if (isValid) {
    console.log(`[Auth] Login successful for: "${username}"`);

    // Automatically update the database to the new password, overwriting the old password in DB
    const finalUser = envCreds.username || username;
    const finalPass = envCreds.password || password;
    await syncAdminToDatabase(finalUser, finalPass);

    await startSession(username);
    redirect('/admin');
  } else {
    console.warn(`[Auth] Failed login attempt for username: "${username}".`);
    return { error: 'Invalid credentials' };
  }
}

export async function adminLogout() {
  await endSession();
  redirect('/admin/login');
}
