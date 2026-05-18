require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

async function importAustraliaBlogs() {
  let connection;
  try {
    const dataPath = path.join(__dirname, '../blog_data/australia_blog.json');
    if (!fs.existsSync(dataPath)) {
      console.error(`[Script] Source file not found: ${dataPath}`);
      return;
    }

    const blogsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
    console.log(`[Script] Found ${blogsData.length} Australia blogs to process.`);

    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Script] Connected to database.');

    let insertedCount = 0;
    let skippedCount = 0;

    const seoImage = '/uploads/2025/04/How-Important-SEO-Elements-Can-Help-You-Rank-Higher-on-Google.jpg';
    const webImage = '/uploads/2025/07/discover-about-the-digital-sucess.png';
    const appImage = '/uploads/2026/05/online-digital-marketing-illustration-concept.png';
    const generalImage = '/uploads/2025/12/Why-is-WordPress-Becoming-the-Most-Popular-Choice-for-Web-Development-Read-to-Find-Out.png';

    for (const post of blogsData) {
      const slug = post.slug;
      const title = post.title?.rendered || slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const content = post.content?.rendered || '';
      
      // Keep curated excerpt or fall back
      let excerpt = post.excerpt?.rendered || '';
      if (!excerpt) {
        const cleanContent = content.replace(/<[^>]*>?/gm, '');
        excerpt = cleanContent.slice(0, 150) + '...';
      }

      // Format date
      let dateStr = '';
      try {
        dateStr = new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });
      } catch (err) {
        dateStr = new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });
      }

      // Category extraction
      let category = 'Digital Marketing';
      if (post.class_list && Array.isArray(post.class_list)) {
        const catClass = post.class_list.find(cls => cls.startsWith('category-'));
        if (catClass) {
          category = catClass
            .replace('category-', '')
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
        }
      }

      // Image selection: Check if we can resolve from embedded media, fetch from featured media, or fall back to high-quality default matching the topic
      let image = '';
      if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0]) {
        const featMedia = post._embedded['wp:featuredmedia'][0];
        const sourceUrl = featMedia?.media_details?.sizes?.full?.source_url || featMedia?.source_url;
        if (sourceUrl) {
          image = sourceUrl.replace('https://flymediatech.com/wp-content/uploads/', '/uploads/')
                           .replace('https://flymediatech.com.au/wp-content/uploads/', '/uploads/')
                           .replace('http://flymediatech.com/wp-content/uploads/', '/uploads/')
                           .replace('http://flymediatech.com.au/wp-content/uploads/', '/uploads/');
          console.log(`[Script] Resolved image URL from embedded media: ${image}`);
        }
      }

      if (!image && post.featured_media && post.featured_media > 0) {
        try {
          console.log(`[Script] Fetching media info for featured_media ID ${post.featured_media}...`);
          const res = await fetch(`https://flymediatech.com/australia/wp-json/wp/v2/media/${post.featured_media}`);
          if (res.ok) {
            const mediaData = await res.json();
            const sourceUrl = mediaData?.media_details?.sizes?.full?.source_url || mediaData?.source_url;
            if (sourceUrl) {
              image = sourceUrl.replace('https://flymediatech.com/wp-content/uploads/', '/uploads/')
                               .replace('https://flymediatech.com.au/wp-content/uploads/', '/uploads/')
                               .replace('http://flymediatech.com/wp-content/uploads/', '/uploads/')
                               .replace('http://flymediatech.com.au/wp-content/uploads/', '/uploads/');
              console.log(`[Script] Resolved image URL from live fetch: ${image}`);
            }
          }
        } catch (e) {
          console.log(`[Script] Media fetch error for ID ${post.featured_media}: ${e.message}`);
        }
      }

      if (!image) {
        // Fallback to "Golden" matching images
        const t = title.toLowerCase();
        if (t.includes('seo') || t.includes('search engine') || t.includes('marketing') || t.includes('ranking')) {
          image = seoImage;
        } else if (t.includes('web') || t.includes('design') || t.includes('development') || t.includes('website')) {
          image = webImage;
        } else if (t.includes('app') || t.includes('mobile') || t.includes('android') || t.includes('ios')) {
          image = appImage;
        } else {
          image = generalImage;
        }
      }

      // Strip tags for meta descriptions
      const cleanExcerpt = excerpt.replace(/<[^>]*>?/gm, '').trim();

      try {
        await connection.execute(
          `INSERT INTO blogs (
            title, slug, content, excerpt, image, date, category, region, views, 
            metaTitle, metaDescription, keywords, ogTitle, ogDescription, ogImage, 
            canonicalUrl, metaRobots, twitterCard, createdAt, updatedAt
          ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
          [
            title,
            slug,
            content,
            excerpt,
            image,
            dateStr,
            category,
            'australia', // Crucial region flag!
            Math.floor(Math.random() * 80) + 10, // Views seeding
            title,
            cleanExcerpt.slice(0, 155),
            category,
            title,
            cleanExcerpt.slice(0, 155),
            image,
            `https://flymediatech.com/australia/blog/${slug}`,
            'index, follow',
            'summary_large_image'
          ]
        );
        insertedCount++;
        console.log(`[Script] [${insertedCount}] Inserted: ${slug}`);
      } catch (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          // If duplicate slug exists, let's update it to ensure it is in the australia region and has latest data
          try {
            await connection.execute(
              `UPDATE blogs SET 
                title = ?, content = ?, excerpt = ?, image = ?, date = ?, category = ?, region = ?, 
                metaTitle = ?, metaDescription = ?, keywords = ?, ogTitle = ?, ogDescription = ?, ogImage = ?, 
                canonicalUrl = ?, updatedAt = NOW() 
              WHERE slug = ?`,
              [
                title,
                content,
                excerpt,
                image,
                dateStr,
                category,
                'australia',
                title,
                cleanExcerpt.slice(0, 155),
                category,
                title,
                cleanExcerpt.slice(0, 155),
                image,
                `https://flymediatech.com/australia/blog/${slug}`,
                slug
              ]
            );
            insertedCount++;
            console.log(`[Script] [${insertedCount}] Updated existing: ${slug}`);
          } catch (updateErr) {
            console.error(`[Script] Error updating duplicate ${slug}:`, updateErr.message);
          }
        } else {
          console.error(`[Script] Error inserting ${slug}:`, err.message);
          skippedCount++;
        }
      }
    }

    console.log(`[Script] Import complete. Successfully inserted/updated ${insertedCount} blogs. Skipped/Failed: ${skippedCount}`);
  } catch (error) {
    console.error('[Script] Fatal Error:', error);
  } finally {
    if (connection) await connection.end();
  }
}

importAustraliaBlogs();
