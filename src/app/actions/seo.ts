'use server';

import { SEOConfig, FAQ } from '@/models';
import { revalidatePath } from 'next/cache';

export async function getSEOConfig() {
  try {
    const config = await SEOConfig.findOne({ where: { id: 1 } });
    if (!config) return null;
    return config.get({ plain: true });
  } catch (error) {
    console.error('Error fetching SEO config:', error);
    return null;
  }
}

export async function updateSEOConfig(formData: FormData) {
  const data = {
    businessName: formData.get('businessName') as string,
    businessDescription: formData.get('businessDescription') as string,
    logoUrl: formData.get('logoUrl') as string,
    phone: formData.get('phone') as string,
    email: formData.get('email') as string,
    streetAddress: formData.get('streetAddress') as string,
    city: formData.get('city') as string,
    state: formData.get('state') as string,
    postalCode: formData.get('postalCode') as string,
    countryCode: formData.get('countryCode') as string,
    latitude: formData.get('latitude') as string,
    longitude: formData.get('longitude') as string,
    socialLinks: formData.get('socialLinks') as string,
    googleAnalyticsId: formData.get('googleAnalyticsId') as string,
    googleTagManagerId: formData.get('googleTagManagerId') as string,
    globalSchema: formData.get('globalSchema') as string,
    headerScripts: formData.get('headerScripts') as string,
    footerScripts: formData.get('footerScripts') as string,
  };

  try {
    const [config, created] = await SEOConfig.findOrCreate({
      where: { id: 1 },
      defaults: data
    });

    if (!created) {
      await config.update(data);
    }

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error updating SEO config:', error);
    return { success: false, error: 'Failed to update configuration' };
  }
}

export async function getFAQs() {
  try {
    const faqs = await FAQ.findAll({ order: [['order', 'ASC']] });
    return faqs.map(f => f.toJSON());
  } catch (error) {
    console.error('Error fetching FAQs:', error);
    return [];
  }
}

export async function upsertFAQ(formData: FormData) {
  const id = formData.get('id') ? Number(formData.get('id')) : null;
  const question = formData.get('question') as string;
  const answer = formData.get('answer') as string;
  const order = Number(formData.get('order') || 0);

  try {
    if (id) {
      await FAQ.update({ question, answer, order }, { where: { id } });
    } else {
      await FAQ.create({ question, answer, order });
    }

    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error upserting FAQ:', error);
    return { success: false, error: 'Failed to save FAQ' };
  }
}

export async function deleteFAQ(id: number) {
  try {
    await FAQ.destroy({ where: { id } });
    revalidatePath('/');
    return { success: true };
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    return { success: false };
  }
}

export async function syncDatabase() {
  try {
    const { initModels, PageSEO } = await import('@/models');
    await initModels();

    // Import from JSON dump to populate database table
    const fs = await import('fs');
    const path = await import('path');
    const dumpPath = path.join(process.cwd(), 'blog_data/pageseos_dump.json');
    if (fs.existsSync(dumpPath)) {
      const dumpData = JSON.parse(fs.readFileSync(dumpPath, 'utf8'));
      for (const item of dumpData) {
        if (!item.pageUrl) continue;
        const [record, created] = await PageSEO.findOrCreate({
          where: { pageUrl: item.pageUrl },
          defaults: {
            title: item.title,
            description: item.description,
            keywords: item.keywords,
            customSchema: item.customSchema,
            ogTitle: item.ogTitle,
            ogDescription: item.ogDescription,
            ogImage: item.ogImage,
            canonicalUrl: item.canonicalUrl,
            metaRobots: item.metaRobots,
            twitterCard: item.twitterCard || 'summary_large_image',
          }
        });
        if (!created) {
          await record.update({
            title: item.title,
            description: item.description,
            keywords: item.keywords,
            customSchema: item.customSchema,
            ogTitle: item.ogTitle,
            ogDescription: item.ogDescription,
            ogImage: item.ogImage,
            canonicalUrl: item.canonicalUrl,
            metaRobots: item.metaRobots,
            twitterCard: item.twitterCard || 'summary_large_image',
          });
        }
      }
    }

    return { success: true };
  } catch (error: any) {
    console.error('Database sync failed:', error);
    return { success: false, error: error.message };
  }
}
