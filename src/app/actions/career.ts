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

// Job Application Submission Handling
import { Application } from '@/models';
import fs from 'fs/promises';
import path from 'path';

export async function applyToJob(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const position = formData.get('position') as string;
  const message = formData.get('message') as string || '';
  const resumeFile = formData.get('resume') as File | null;

  try {
    // Proactively sync database table
    await Application.sync({ alter: true });

    if (!resumeFile || resumeFile.size === 0) {
      return { success: false, error: 'Resume file is required' };
    }

    const uploadDir = path.join(process.cwd(), 'public/uploads/resumes');
    await fs.mkdir(uploadDir, { recursive: true });

    const buffer = Buffer.from(await resumeFile.arrayBuffer());
    const fileName = `${Date.now()}-${resumeFile.name.replace(/\s+/g, '-')}`;
    const filePath = path.join(uploadDir, fileName);

    await fs.writeFile(filePath, buffer);
    const resumeUrl = `/uploads/resumes/${fileName}`;

    await Application.create({
      name,
      email,
      phone,
      position,
      resumeUrl,
      message
    });

    return { success: true };
  } catch (error: any) {
    console.error('Error submitting application:', error);
    return { success: false, error: error.message || 'Failed to submit application' };
  }
}

export async function getApplications() {
  try {
    await Application.sync({ alter: true });
    const apps = await Application.findAll({ order: [['createdAt', 'DESC']] });
    return apps.map(a => a.toJSON());
  } catch (error) {
    console.error('Error fetching applications:', error);
    return [];
  }
}

export async function deleteApplication(id: number) {
  try {
    const app = await Application.findByPk(id);
    if (!app) return { success: false, error: 'Application not found' };

    // Delete uploaded resume file if exists
    try {
      const filePath = path.join(process.cwd(), 'public', app.resumeUrl);
      await fs.unlink(filePath);
    } catch (e) {
      console.warn('Could not delete resume from disk:', e);
    }

    await app.destroy();
    return { success: true };
  } catch (error: any) {
    console.error('Error deleting application:', error);
    return { success: false, error: error.message };
  }
}
