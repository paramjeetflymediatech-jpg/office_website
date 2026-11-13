'use server';

import { login as startSession, logout as endSession } from '@/lib/auth';
import { User } from '@/models';
import { redirect } from 'next/navigation';

function sanitize(val?: string | null): string {
  if (!val) return '';
  let s = val.trim();
  // Strip enclosing quotes if user wrapped them in .env (e.g. "pass123" or 'pass123')
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1);
  }
  return s.trim();
}

async function syncAdminUserToDatabase(envUsername: string, envPassword: string) {
  try {
    await User.sync();
    const existing = await User.findOne({ where: { username: envUsername } });
    if (existing) {
      if (existing.getDataValue('password') !== envPassword) {
        await existing.update({ password: envPassword });
        console.log(`[Auth] Automatically updated admin password in DB for: ${envUsername}`);
      }
    } else {
      await User.create({ username: envUsername, password: envPassword });
      console.log(`[Auth] Created admin user in DB from .env for: ${envUsername}`);
    }
  } catch (err: any) {
    console.warn('[Auth] Database sync warning:', err?.message || err);
  }
}

export async function adminLogin(formData: FormData) {
  const username = sanitize(formData.get('username') as string);
  const password = (formData.get('password') as string) || '';

  const envUsername = sanitize(process.env.ADMIN_USERNAME) || 'admin';
  const envPassword = sanitize(process.env.ADMIN_PASSWORD) || 'admin@123';

  // 1. Check against .env credentials
  const matchesEnv = username === envUsername && password === envPassword;

  // 2. Check against Database credentials
  let matchesDb = false;
  try {
    await User.sync();
    const dbUser = await User.findOne({ where: { username } });
    if (dbUser && dbUser.getDataValue('password') === password) {
      matchesDb = true;
    }
  } catch (err: any) {
    console.warn('[Auth] DB lookup error:', err?.message || err);
  }

  // 3. Fallback default credentials check
  const matchesFallback = username === 'admin' && password === 'admin@123';

  if (matchesEnv || matchesDb || matchesFallback) {
    // Automatically update the database so DB always reflects current .env credentials
    if (envUsername && envPassword) {
      await syncAdminUserToDatabase(envUsername, envPassword);
    }

    await startSession(username);
    redirect('/admin');
  } else {
    console.warn(`[Auth] Failed login attempt for username: "${username}"`);
    return { error: 'Invalid credentials' };
  }
}

export async function adminLogout() {
  await endSession();
  redirect('/admin/login');
}
