'use server';

import { Blog } from '@/models';
import { revalidatePath } from 'next/cache';
import fs from 'fs/promises';
import path from 'path';

export async function getBlogs(region?: string) {
  try {
    await Blog.sync();
    console.log(`[BlogAction] Fetching fresh blog posts for region: ${region || 'global'}...`);

    const whereClause = region ? { region } : {};

    const blogs = await Blog.findAll({
      where: whereClause,
      order: [['createdAt', 'DESC']],
      raw: true
    });
    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error('[BlogAction] Fetch Error:', error);
    return [];
  }
}

export async function getBlogBySlug(slug: string) {
  try {
    await Blog.sync();
    const blog = await Blog.findOne({
      where: { slug },
      raw: true
    });
    return blog ? JSON.parse(JSON.stringify(blog)) : null;
  } catch (error) {
    console.error('[BlogAction] Fetch by Slug Error:', error);
    return null;
  }
}

export async function getBlogById(id: number) {
  try {
    const blog = await Blog.findByPk(id, { raw: true });
    return blog ? JSON.parse(JSON.stringify(blog)) : null;
  } catch (error) {
    console.error('[BlogAction] Fetch by ID Error:', error);
    return null;
  }
}

export async function createBlog(formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const category = formData.get('category') as string;
  const region = formData.get('region') as string || 'global';
  const dateStr = formData.get('date') as string || new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const imageFile = formData.get('imageFile') as File | null;
  const imageUrlInput = formData.get('imageUrl') as string || '';
  const metaTitle = formData.get('metaTitle') as string || '';
  const metaDescription = formData.get('metaDescription') as string || '';
  const focusKeyword = formData.get('focusKeyword') as string || '';
  const keywords = formData.get('keywords') as string || '';
  const schema = formData.get('schema') as string || '';
  const ogTitle = formData.get('ogTitle') as string || '';
  const ogDescription = formData.get('ogDescription') as string || '';
  const ogImage = formData.get('ogImage') as string || '';
  const canonicalUrl = formData.get('canonicalUrl') as string || '';
  const metaRobots = formData.get('metaRobots') as string || 'index, follow';
  const twitterCard = formData.get('twitterCard') as string || 'summary_large_image';

  try {
    await Blog.sync();
    let finalImageUrl = imageUrlInput;

    // Handle image file upload if provided
    if (imageFile && imageFile.size > 0) {
      const uploadDir = path.join(process.cwd(), 'public/uploads/blog');
      await fs.mkdir(uploadDir, { recursive: true });

      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const fileName = `${Date.now()}-${imageFile.name.replace(/\s+/g, '-')}`;
      const filePath = path.join(uploadDir, fileName);

      await fs.writeFile(filePath, buffer);
      finalImageUrl = `/uploads/blog/${fileName}`;
    }

    if (!finalImageUrl) {
      finalImageUrl = ''; // fallback
    }

    const blog = await Blog.create({
      title,
      slug: slug.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      excerpt,
      content,
      category,
      region,
      date: dateStr,
      image: finalImageUrl,
      views: 0,
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      schema,
      ogTitle,
      ogDescription,
      ogImage,
      canonicalUrl,
      metaRobots,
      twitterCard,
    });

    revalidatePath('/blog');
    revalidatePath('/admin/blog');
    return { success: true, blog: blog.toJSON() };
  } catch (error: any) {
    console.error('[BlogAction] Create Error:', error);
    return { success: false, error: error.message || 'Failed to create blog post' };
  }
}

export async function updateBlog(id: number, formData: FormData) {
  const title = formData.get('title') as string;
  const slug = formData.get('slug') as string;
  const excerpt = formData.get('excerpt') as string;
  const content = formData.get('content') as string;
  const category = formData.get('category') as string;
  const region = formData.get('region') as string || 'global';
  const dateStr = formData.get('date') as string;
  const imageFile = formData.get('imageFile') as File | null;
  const imageUrlInput = formData.get('imageUrl') as string || '';
  const metaTitle = formData.get('metaTitle') as string || '';
  const metaDescription = formData.get('metaDescription') as string || '';
  const focusKeyword = formData.get('focusKeyword') as string || '';
  const keywords = formData.get('keywords') as string || '';
  const schema = formData.get('schema') as string || '';
  const ogTitle = formData.get('ogTitle') as string || '';
  const ogDescription = formData.get('ogDescription') as string || '';
  const ogImage = formData.get('ogImage') as string || '';
  const canonicalUrl = formData.get('canonicalUrl') as string || '';
  const metaRobots = formData.get('metaRobots') as string || 'index, follow';
  const twitterCard = formData.get('twitterCard') as string || 'summary_large_image';

  try {
    await Blog.sync();
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return { success: false, error: 'Blog post not found' };
    }

    let finalImageUrl = imageUrlInput; // Use the provided URL (or empty if removed)

    // Handle new image file upload if provided
    if (imageFile && imageFile.size > 0) {
      const uploadDir = path.join(process.cwd(), 'public/uploads/blog');
      await fs.mkdir(uploadDir, { recursive: true });

      const buffer = Buffer.from(await imageFile.arrayBuffer());
      const fileName = `${Date.now()}-${imageFile.name.replace(/\s+/g, '-')}`;
      const filePath = path.join(uploadDir, fileName);

      await fs.writeFile(filePath, buffer);

      // Attempt to clean up old uploaded file if it was custom
      if (blog.image.startsWith('/uploads/blog/')) {
        try {
          const oldPath = path.join(process.cwd(), 'public', blog.image);
          await fs.unlink(oldPath);
        } catch (e) {
          console.warn('[BlogAction] Could not delete old file:', e);
        }
      }

      finalImageUrl = `/uploads/blog/${fileName}`;
    }

    await blog.update({
      title,
      slug: slug.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
      excerpt,
      content,
      category,
      region,
      date: dateStr || blog.date,
      image: finalImageUrl,
      metaTitle,
      metaDescription,
      focusKeyword,
      keywords,
      schema,
      ogTitle,
      ogDescription,
      ogImage,
      canonicalUrl,
      metaRobots,
      twitterCard,
    });

    revalidatePath('/blog');
    revalidatePath(`/blog/${blog.slug}`);
    revalidatePath('/admin/blog');
    return { success: true, blog: blog.toJSON() };
  } catch (error: any) {
    console.error('[BlogAction] Update Error:', error);
    return { success: false, error: error.message || 'Failed to update blog post' };
  }
}

export async function deleteBlog(id: number) {
  try {
    const blog = await Blog.findByPk(id);
    if (!blog) {
      return { success: false, error: 'Blog post not found' };
    }

    // Clean up uploaded file if applicable
    if (blog.image.startsWith('/uploads/blog/')) {
      try {
        const filePath = path.join(process.cwd(), 'public', blog.image);
        await fs.unlink(filePath);
      } catch (e) {
        console.warn('[BlogAction] Could not delete file from disk:', e);
      }
    }

    const slug = blog.slug;
    await blog.destroy();

    revalidatePath('/blog');
    revalidatePath(`/blog/${slug}`);
    revalidatePath('/admin/blog');
    return { success: true };
  } catch (error: any) {
    console.error('[BlogAction] Delete Error:', error);
    return { success: false, error: error.message || 'Failed to delete blog post' };
  }
}

export async function incrementBlogViews(id: number) {
  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.increment('views', { by: 1 });
      return { success: true };
    }
    return { success: false, error: 'Not found' };
  } catch (error) {
    console.error('[BlogAction] Increment Views Error:', error);
    return { success: false };
  }
}

// Seed helper to populate with original 6 posts if database table is empty
export async function seedOriginalBlogs() {
  try {
    await Blog.sync();
    const count = await Blog.count();
    if (count > 0) {
      return { success: true, message: 'Already seeded' };
    }

    const originalPosts = [
      {
        title: "Top 10 Moving Companies In Calgary",
        slug: "top-10-moving-companies-in-calgary",
        image: "/uploads/2026/05/2293.jpg",
        date: "May 6, 2026",
        excerpt: "Introduction Modern moving services require more than just manual labour; most importantly, it demands advanced logistics, specialised equipment and extraordinary protection protocols. This blog highlights the top ten moving companies",
        content: `Introduction Modern moving services require more than just manual labour; most importantly, it demands advanced logistics, specialised equipment and extraordinary protection protocols. This blog highlights the top ten moving companies in Calgary, which differ by their advanced service features and high-tier operational standards. These moving industry leaders are selected based on the integration of modern moving technologies such as GPS-tracked transportation vehicles, climate-adaptive handling and inventory mapping systems to provide the most effective moving experience. Each mentioned moving company maintains full licensing and comprehensive liability insurance, offering multi-layered safety nets for your belongings. Their service menu goes beyond basic transport, especially featuring technical specialities like white glove handling for delicate electronics, custom crating for high-value art and modular scheduling to fit with the continuously changing timelines of Calgary’s real estate market. Their focus is on prioritising transparent binding cost estimates and professional-grade packing materials. These companies provide a perfect technical infrastructure necessary for a seamless residential or commercial transition.

The top ten moving companies in Calgary are:

1. Galaxy Movers Calgary: Galaxy Movers stands out for their huge service area and specialised equipment handling. Their collection of vehicles are best fitted for diverse relocation needs, ranging from heavy industrial machinery to delicate household items. A key feature of their service is that they have a 24/7 support network, which allows for late-night commercial transitions to ensure the business keeps on moving by reducing its downtime. They make use of the advanced logistics software to choose the most efficient routes through Calgary’s traffic, which directly reduces the transit time. They use specialised techniques to adapt to the extreme climate conditions of Calgary. They also offer a full-service option. In this option, the crew organises the new space, not just drops off the boxes. They also provide high security storage options where your items are stored in the climate-controlled facilities for mid-transition delays. They offer full value protection for high-value items like electronics and art. The price of a move in Calgary generally depends on the size of the crew, including all the extra packaging material used for your belongings.

2. All-day movers: All-day movers bridge the gap between boutique personalised service and large-scale logistical capability. The feature that makes them stand out in the market is their safe-transit packing protocol, which involves multi-layer padding and specialised loading techniques designed to prevent the shifting of your belongings during long-distance moves. As a family-run enterprise, they prioritise a consistent crew-to-client ratio, ensuring the same team that packs your home is the one that unloads it, providing a great level of accountability. They track all your items in detail to prevent the loss of any of the items during residential or commercial moves. They provide custom crating for oversized or fragile furniture. They operate under a total liability coverage model, protecting the cargo from the moment of first touch to the final placement. Their binding quote system ensures that their estimated costs remain fixed regardless of unforeseen traffic or minor delays.

3. Sparta movers

4. Calgary movers pro

5. Two small men with big hearts

6. Super duper movers

7. Calgary city movers

8. Amazing Grace movers

9. Right move movers

10. Quick and easy moving`,
        category: "Movers"
      },
      {
        title: "Have A Look At The Best 10 Movers In Regina",
        slug: "have-a-look-at-the-best-movers-in-regina",
        image: "/uploads/2026/05/2289.jpg",
        date: "May 6, 2026",
        excerpt: "Having a stress-free moving process while ensuring that your belongings are safely handled is the usual concern for most individuals; this is where the professionals and skilled movers of Galaxy",
        content: `Having a stress-free moving process while ensuring that your belongings are safely handled is the usual concern for most individuals; this is where the professionals and skilled movers of Galaxy Movers Regina step in to help with their top quality services. Moving into a new home or relocating your workspace is complex and challenging. It needs a detailed set of packing methods, safe transit strategies and secure unloading structures to ensure complete protection of your goods. Selecting the right mover from the numerous options in Regina depends on various factors like company profile, reliability, cost-efficiency and services. This list highlights the top ten best moving options in Regina based on these strict guidelines.`,
        category: "Movers"
      },
      {
        title: "What Are The Stages Of UX Research Process? Read Along To Get To Know About Them",
        slug: "what-are-the-stages-of-ux-research-process-read-along-to-get-to-know-about-them",
        image: "/uploads/2025/12/Why-is-WordPress-Becoming-the-Most-Popular-Choice-for-Web-Development-Read-to-Find-Out.png",
        date: "April 17, 2026",
        excerpt: "The User Experience process involves various stages such as defining clear objectives, developing a UX research plan, selecting the right research method, collecting data and conducting an analysis. This helps",
        content: `The User Experience process involves various stages such as defining clear objectives, developing a UX research plan, selecting the right research method, collecting data and conducting an analysis. This helps in understanding the target audience in a more comprehensive manner and provides a structured framework to improve product-market fit.`,
        category: "Web Design"
      },
      {
        title: "How Does Online Credibility Speak Louder Than The Promised Claims?",
        slug: "how-does-online-credibility-speak-louder-than-the-promised-claims",
        image: "/uploads/2026/01/Are-You-Planning-On-Improving-Your-ROI-Here-Are-Some-Strategies.png",
        date: "April 14, 2026",
        excerpt: "In the digital era and ever-evolving businesses, everything is bought, booked, or closed only when one feels it to be reliable and worthy enough to trust. Now, trust is something",
        content: `In the digital era and ever-evolving businesses, everything is bought, booked, or closed only when one feels it to be reliable and worthy enough to trust. Now, trust is something that can never be bought or built in an instant. It requires consistent performance, verified proof, customer reviews, and high-quality services to speak on behalf of your brand.`,
        category: "AI Marketing"
      },
      {
        title: "How Is AI Changing The Future Of Digital Marketing?",
        slug: "how-is-ai-changing-the-future-of-digital-marketing",
        image: "/uploads/2025/09/Understand-the-Key-Differences-Between-AEO-and-GEO-.jpg",
        date: "April 10, 2026",
        excerpt: "The world of digital marketing is currently undergoing its most significant shift, as artificial intelligence is no longer just a futuristic concept or a tool for tech agencies; it has",
        content: `The world of digital marketing is currently undergoing its most significant shift, as artificial intelligence is no longer just a futuristic concept or a tool for tech agencies; it has quickly become the primary framework driving content production, audience analytics, search visibility, and personalized customer interactions.`,
        category: "AI Marketing"
      },
      {
        title: "What Can Be The Strategic Planning To Manage the Review System In Compliance With Fake Review Regulation?",
        slug: "what-can-be-the-strategic-planning-to-manage-the-review-system-in-compliance-with-fake-review-regulation",
        image: "/uploads/2025/09/5596173_55724-scaled.jpg",
        date: "April 6, 2026",
        excerpt: "Have you ever wondered about the vital role played by the customers’ reviews on your specific product? If not, then you might be missing out on something major that can",

        content: `Have you ever wondered about the vital role played by the customers’ reviews on your specific product? If not, then you might be missing out on something major that can drastically impact your brand value. Managing customer feedback while fully complying with the latest fake review regulations requires clear protocols, customer verification, and secure platform logging.`,
        category: "Google Business Profile"
      }
    ];

    for (const post of originalPosts) {
      await Blog.create({
        ...post,
        views: Math.floor(Math.random() * 10) + 1
      });
    }

    revalidatePath('/blog');
    return { success: true, message: 'Seeded successfully!' };
  } catch (error: any) {
    console.error('[BlogAction] Seeding Error:', error);
    return { success: false, error: error.message };
  }
}

export async function getLegacyBlogData(slug: string) {
  try {
    const fs = require('fs/promises');
    const path = require('path');
    const blogFilePath = path.join(process.cwd(), 'blog_data', 'blog.json');
    
    if (await fs.access(blogFilePath).then(() => true).catch(() => false)) {
      const blogs = JSON.parse(await fs.readFile(blogFilePath, 'utf8'));
      const blog = blogs.find((b: any) => b.slug === slug);
      if (blog) {
        return { 
          success: true, 
          data: {
            metaTitle: blog.seo_title,
            metaDescription: blog.seo_description,
            keywords: blog.seo_keywords
          } 
        };
      }
    }
    return { success: false, error: 'Legacy data not found for this slug' };
  } catch (error) {
    return { success: false, error: 'Failed to fetch legacy data' };
  }
}
