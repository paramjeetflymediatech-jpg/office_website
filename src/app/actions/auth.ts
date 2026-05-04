'use server';

import { login as startSession, logout as endSession } from '@/lib/auth';
import { User } from '@/models';
import { redirect } from 'next/navigation';

export async function adminLogin(formData: FormData) {
  const username = formData.get('username') as string;
  const password = formData.get('password') as string;

  // Simple hardcoded check for now, or check DB
  // In production, use hashed passwords
  if (username === 'admin' && password === 'admin@123') {
    await startSession(username);
    redirect('/admin');
  } else {
    return { error: 'Invalid credentials' };
  }
}

export async function adminLogout() {
  await endSession();
  redirect('/admin/login');
}
