'use server';

import { PageSEO } from '@/models';
import { revalidatePath } from 'next/cache';

export async function getPageSEOs(page: number = 1, limit: number = 10, search: string = '') {
  try {
    const offset = (page - 1) * limit;
    const { Op } = require('sequelize');
    
    const where: any = {};
    if (search) {
      where[Op.or] = [
        { pageUrl: { [Op.like]: `%${search}%` } },
        { title: { [Op.like]: `%${search}%` } }
      ];
    }

    const { count, rows } = await PageSEO.findAndCountAll({
      where,
      order: [['pageUrl', 'ASC']],
      limit,
      offset
    });

    return {
      success: true,
      data: JSON.parse(JSON.stringify(rows)),
      totalCount: count,
      totalPages: Math.ceil(count / limit)
    };
  } catch (error) {
    console.error('Failed to fetch page SEOs:', error);
    return { success: false, data: [], totalCount: 0, totalPages: 0 };
  }
}

export async function updatePageSEO(formData: FormData) {
  try {
    await PageSEO.sync();
    const id = formData.get('id');
    const data = {
      pageUrl: formData.get('pageUrl') as string,
      title: formData.get('title') as string,
      description: formData.get('description') as string,
      keywords: formData.get('keywords') as string,
      customSchema: formData.get('customSchema') as string,
      ogTitle: formData.get('ogTitle') as string,
      ogDescription: formData.get('ogDescription') as string,
      ogImage: formData.get('ogImage') as string,
      canonicalUrl: formData.get('canonicalUrl') as string,
      metaRobots: formData.get('metaRobots') as string,
      twitterCard: formData.get('twitterCard') as string,
    };

    if (id) {
      await PageSEO.update(data, { where: { id } });
    } else {
      // Check if pageUrl already exists to avoid unique constraint error
      const existing = await PageSEO.findOne({ where: { pageUrl: data.pageUrl } });
      if (existing) {
        await existing.update(data);
      } else {
        await PageSEO.create(data);
      }
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

export async function syncAllBlogSEO() {
  try {
    const fs = require('fs');
    const path = require('path');
    const blogFilePath = path.join(process.cwd(), 'blog_data', 'blog.json');
    
    if (!fs.existsSync(blogFilePath)) {
      return { success: false, error: 'blog.json not found' };
    }

    const blogs = JSON.parse(fs.readFileSync(blogFilePath, 'utf8'));
    let updatedCount = 0;
    let createdCount = 0;

    const { Blog } = await import('@/models');

    for (const blog of blogs) {
      if (!blog.slug) continue;
      
      const pageUrl = `/blog/${blog.slug}`;
      const seoData = {
        title: blog.seo_title || blog.title || '',
        description: blog.seo_description || '',
        keywords: blog.seo_keywords || '',
        ogTitle: blog.seo_title || blog.title || '',
        ogDescription: blog.seo_description || '',
        ogImage: blog.image || '',
        canonicalUrl: `https://flymediatech.com${pageUrl}`,
        metaRobots: 'index, follow',
        twitterCard: 'summary_large_image'
      };

      // 1. Update PageSEO table
      const [record, created] = await PageSEO.upsert({
        pageUrl,
        ...seoData
      });
      if (created) createdCount++;
      else updatedCount++;

      // 2. Update Blog table
      await Blog.update({
        metaTitle: seoData.title,
        metaDescription: seoData.description,
        keywords: seoData.keywords,
        ogTitle: seoData.ogTitle,
        ogDescription: seoData.ogDescription,
        ogImage: seoData.ogImage,
        canonicalUrl: seoData.canonicalUrl,
        metaRobots: seoData.metaRobots,
        twitterCard: seoData.twitterCard
      }, {
        where: { slug: blog.slug }
      });
    }

    revalidatePath('/');
    return { 
      success: true, 
      message: `Successfully synchronized SEO for ${blogs.length} blogs. (${updatedCount} updated, ${createdCount} created)` 
    };
  } catch (error: any) {
    console.error('Failed to sync blog SEO:', error);
    return { success: false, error: error.message || 'Failed to sync blog SEO' };
  }
}
