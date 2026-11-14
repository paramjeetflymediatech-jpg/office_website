import { SignJWT, jwtVerify } from 'jose';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

function cleanString(val?: string | null): string {
  if (!val) return '';
  let s = val.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) {
    s = s.slice(1, -1);
  }
  return s.trim();
}

export function parseDurationToSeconds(durationStr?: string): number {
  if (!durationStr) return 24 * 60 * 60; // default 24h
  const trimmed = durationStr.trim().toLowerCase();
  
  if (/^\d+$/.test(trimmed)) {
    return parseInt(trimmed, 10);
  }
  
  const match = trimmed.match(/^(\d+)\s*(s|m|h|d|w)?$/);
  if (!match) return 24 * 60 * 60;
  
  const value = parseInt(match[1], 10);
  const unit = match[2] || 's';
  
  switch (unit) {
    case 's': return value;
    case 'm': return value * 60;
    case 'h': return value * 60 * 60;
    case 'd': return value * 24 * 60 * 60;
    case 'w': return value * 7 * 24 * 60 * 60;
    default: return value;
  }
}

export function getJwtConfig() {
  let secret = process.env.JWT_SECRET || 'flymedia-secret-key';
  let expiresIn = process.env.JWT_EXPIRES_IN || '24h';

  try {
    if (typeof process !== 'undefined' && typeof process.cwd === 'function') {
      const fs = require('fs');
      const path = require('path');
      const envPath = path.join(process.cwd(), '.env');
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf8');
        for (const line of content.split('\n')) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('#')) continue;
          const eqIdx = trimmed.indexOf('=');
          if (eqIdx !== -1) {
            const k = trimmed.slice(0, eqIdx).trim();
            const v = cleanString(trimmed.slice(eqIdx + 1).trim());
            if (k === 'JWT_SECRET' && v) secret = v;
            if ((k === 'JWT_EXPIRES_IN' || k === 'JWT_EXPIRE') && v) expiresIn = v;
          }
        }
      }
    }
  } catch (e) {
    // Fall back to process.env
  }

  return {
    secret: cleanString(secret) || 'flymedia-secret-key',
    expiresIn: cleanString(expiresIn) || '24h',
  };
}

export function getSecretKey(): Uint8Array {
  const { secret } = getJwtConfig();
  return new TextEncoder().encode(secret);
}

export async function encrypt(payload: any) {
  const { expiresIn } = getJwtConfig();
  const key = getSecretKey();
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const key = getSecretKey();
  const { payload } = await jwtVerify(input, key, {
    algorithms: ['HS256'],
  });
  return payload;
}

export async function login(username: string) {
  const { expiresIn } = getJwtConfig();
  const durationSeconds = parseDurationToSeconds(expiresIn);
  const expires = new Date(Date.now() + durationSeconds * 1000);
  const session = await encrypt({ username, expires });

  // Save the session in a cookie
  (await cookies()).set('session', session, {
    expires,
    maxAge: durationSeconds,
    httpOnly: true,
    sameSite: 'lax',
    path: '/',
  });
}

export async function logout() {
  // Destroy the session
  (await cookies()).set('session', '', {
    expires: new Date(0),
    maxAge: 0,
    path: '/',
  });
}

export async function getSession() {
  const session = (await cookies()).get('session')?.value;
  if (!session) return null;
  try {
    return await decrypt(session);
  } catch (error) {
    return null;
  }
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get('session')?.value;
  if (!session) return;

  try {
    const parsed = await decrypt(session);
    const { expiresIn } = getJwtConfig();
    const durationSeconds = parseDurationToSeconds(expiresIn);
    parsed.expires = new Date(Date.now() + durationSeconds * 1000);
    const res = NextResponse.next();
    res.cookies.set({
      name: 'session',
      value: await encrypt(parsed),
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      expires: parsed.expires,
      maxAge: durationSeconds,
    });
    return res;
  } catch (error) {
    return;
  }
}
