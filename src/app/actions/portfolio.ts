'use server';

import { Portfolio } from '@/models';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

export async function getPortfolioItems() {
  try {
    console.log('[Portfolio] Fetching fresh portfolio items...');
    const items = await Portfolio.findAll({ 
      order: [['createdAt', 'DESC']],
      raw: true // Ensure we get plain data
    });
    return items;
  } catch (error) {
    console.error('[Portfolio] Fetch Error:', error);
    return [];
  }
}

export async function uploadPortfolio(formData: FormData) {
  const title = formData.get('title') as string;
  const category = formData.get('category') as string;
  const files = formData.getAll('images') as File[];

  try {
    const uploadDir = path.join(process.cwd(), 'public/uploads/portfolio');
    console.log(`[Portfolio] Target directory: ${uploadDir}`);
    await fs.mkdir(uploadDir, { recursive: true });

    const results = [];
    console.log(`[Portfolio] Received ${files.length} files`);

    for (const file of files) {
      if (!file || file.size === 0) {
        console.log(`[Portfolio] Skipping empty file`);
        continue;
      }

      console.log(`[Portfolio] Processing file: ${file.name} (${file.size} bytes)`);
      const buffer = Buffer.from(await file.arrayBuffer());
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
      const filePath = path.join(uploadDir, fileName);
      
      console.log(`[Portfolio] Writing file to: ${filePath}`);
      await fs.writeFile(filePath, buffer);
      
      const item = await Portfolio.create({
        title: title || file.name,
        category: category || 'General',
        imageUrl: `/uploads/portfolio/${fileName}`
      });
      console.log(`[Portfolio] Created database record: ${item.id}`);
      results.push(item.toJSON());
    }

    revalidatePath('/admin/portfolio');
    return { success: true, count: results.length };
  } catch (error: any) {
    console.error('[Portfolio] Upload Error:', error);
    return { success: false, error: error.message || 'Failed to upload images' };
  }
}

export async function deletePortfolioItem(id: number) {
  try {
    console.log(`[Portfolio] Attempting to delete item: ${id}`);
    const item = await Portfolio.findByPk(id);
    
    if (!item) {
      console.warn(`[Portfolio] Item not found in database: ${id}`);
      return { success: false, error: 'Item not found' };
    }

    // Delete file from disk
    const filePath = path.join(process.cwd(), 'public', item.imageUrl);
    console.log(`[Portfolio] Removing file: ${filePath}`);
    
    try {
      await fs.unlink(filePath);
      console.log(`[Portfolio] File deleted successfully`);
    } catch (e) {
      console.warn('[Portfolio] Could not delete file from disk (it might not exist):', e);
    }

    await item.destroy();
    console.log(`[Portfolio] Database record deleted successfully`);

    revalidatePath('/admin/portfolio');
    revalidatePath('/portfolio');
    return { success: true };
  } catch (error: any) {
    console.error('[Portfolio] Delete Error:', error);
    return { success: false, error: error.message || 'Failed to delete portfolio item' };
  }
}
