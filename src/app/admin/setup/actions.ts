'use server';

import { initModels } from '@/models';

export async function triggerSync() {
  try {
    await initModels();
    return { success: true };
  } catch (e: any) {
    return { success: false, error: e.message };
  }
}
