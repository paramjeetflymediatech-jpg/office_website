'use server';

import { PageSEO } from '@/models';
import { revalidatePath } from 'next/cache';

export async function getPageSEOs() {
  try {
    const data = await PageSEO.findAll({
      order: [['pageUrl', 'ASC']]
    });
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    console.error('Failed to fetch page SEOs:', error);
    return [];
  }
}

export async function updatePageSEO(formData: FormData) {
  try {
    const id = formData.get('id');
    const data = {
      pageUrl: formData.get('pageUrl') as string,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      keywords: formData.get('keywords') as string,
      customSchema: formData.get('customSchema') as string,
    };

    if (id) {
      await PageSEO.update(data, { where: { id } });
    } else {
      await PageSEO.create(data);
    }

    revalidatePath('/');
    return { success: true };
  } catch (error: any) {
    console.error('Failed to update page SEO:', error);
    return { success: false, error: error.message || 'Failed to update page SEO' };
  }
}

export async function deletePageSEO(id: number) {
  try {
    await PageSEO.destroy({ where: { id } });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    return { success: false, error: 'Failed to delete page SEO' };
  }
}
