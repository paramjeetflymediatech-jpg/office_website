'use server';

import { ContactQuery } from '@/models';
import { revalidatePath } from 'next/cache';

export async function getContactQueries() {
  try {
    const queries = await ContactQuery.findAll({ order: [['createdAt', 'DESC']] });
    return queries.map(q => q.toJSON());
  } catch (error) {
    console.error('Error fetching queries:', error);
    return [];
  }
}

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const message = formData.get('message') as string;
  const subject = formData.get('subject') as string;

  try {
    await ContactQuery.create({ name, email, phone, subject, message });
    revalidatePath('/admin/contact');
    return { success: true };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: 'Failed to send message' };
  }
}

export async function updateQueryStatus(id: number, status: string) {
  try {
    await ContactQuery.update({ status }, { where: { id } });
    revalidatePath('/admin/contact');
    return { success: true };
  } catch (error) {
    console.error('Error updating query status:', error);
    return { success: false };
  }
}

export async function deleteQuery(id: number) {
  try {
    await ContactQuery.destroy({ where: { id } });
    revalidatePath('/admin/contact');
    return { success: true };
  } catch (error) {
    console.error('Error deleting query:', error);
    return { success: false };
  }
}
