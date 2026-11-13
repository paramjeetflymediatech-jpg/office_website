'use server';

import { login as startSession, logout as endSession } from '@/lib/auth';
import { redirect } from 'next/navigation';

export async function adminLogin(formData: FormData) {
  const username = (formData.get('username') as string)?.trim();
  const password = formData.get('password') as string;

  const validUsername = (process.env.ADMIN_USERNAME || 'admin').trim();
  const validPassword = process.env.ADMIN_PASSWORD || 'admin@123';

  if (username === validUsername && password === validPassword) {
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
