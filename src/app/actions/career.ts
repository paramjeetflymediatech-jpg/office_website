'use server';

import { Career } from '@/models';
import { revalidatePath } from 'next/cache';

export async function getCareers() {
  try {
    const careers = await Career.findAll({ order: [['createdAt', 'DESC']] });
    return careers.map(c => c.toJSON());
  } catch (error) {
    console.error('Error fetching careers:', error);
    return [];
  }
}

export async function upsertCareer(formData: FormData) {
  const id = formData.get('id') ? Number(formData.get('id')) : null;
  const title = formData.get('title') as string;
  const description = formData.get('description') as string;
  const requirements = formData.get('requirements') as string;
  const status = formData.get('status') as string;

  try {
    if (id) {
      await Career.update({ title, description, requirements, status }, { where: { id } });
    } else {
      await Career.create({ title, description, requirements, status });
    }

    revalidatePath('/admin/career');
    return { success: true };
  } catch (error) {
    console.error('Error upserting career:', error);
    return { success: false, error: 'Failed to save job requirement' };
  }
}

export async function deleteCareer(id: number) {
  try {
    await Career.destroy({ where: { id } });
    revalidatePath('/admin/career');
    return { success: true };
  } catch (error) {
    console.error('Error deleting career:', error);
    return { success: false };
  }
}
