const { Sequelize, DataTypes } = require('sequelize');

async function syncAll() {
    const sequelize = new Sequelize('flymedia_db', 'root', 'root', {
        host: 'localhost', dialect: 'mysql', logging: false
    });

    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        slug: { type: DataTypes.STRING, unique: true },
        image: DataTypes.STRING,
        content: DataTypes.TEXT,
    }, { timestamps: false });

    try {
        let page = 1;
        let hasMore = true;
        let totalUpdated = 0;

        console.log('Starting optimized global sync...');

        while (hasMore && page <= 10) {
            console.log(`Fetching page ${page}...`);
            const response = await fetch(`https://flymediatech.com/wp-json/wp/v2/posts?per_page=100&page=${page}`);
            if (!response.ok) break;

            const wpPosts = await response.json();
            if (wpPosts.length === 0) { hasMore = false; break; }

            // Use a small concurrency for media fetching to avoid rate limits
            const CONCURRENCY = 3;
            for (let i = 0; i < wpPosts.length; i += CONCURRENCY) {
                const batch = wpPosts.slice(i, i + CONCURRENCY);
                await Promise.all(batch.map(async (wpPost) => {
                    if (!wpPost.featured_media || wpPost.featured_media === 0) return;

                    const blog = await Blog.findOne({ where: { slug: wpPost.slug } });
                    if (!blog || (blog.image && blog.image !== '' && blog.image !== '/uploads/blog/default.jpg')) return;

                    // Add a small delay to be gentle on the server
                    await new Promise(r => setTimeout(r, 1000));

                    try {
                        let retryCount = 0;
                        let success = false;
                        while (retryCount < 3 && !success) {
                            try {
                                const mediaRes = await fetch(`https://flymediatech.com/wp-json/wp/v2/media/${wpPost.featured_media}`);
                                if (mediaRes.ok) {
                                    const mediaData = await mediaRes.json();
                                    const sourceUrl = mediaData?.media_details?.sizes?.full?.source_url || mediaData?.source_url;
                                    
                                    if (sourceUrl) {
                                        const localUrl = sourceUrl.replace('https://flymediatech.com/wp-content/uploads/', '/uploads/');
                                        await blog.update({ image: localUrl });
                                        totalUpdated++;
                                        console.log(`Updated: ${wpPost.slug}`);
                                        success = true;
                                    }
                                } else {
                                    retryCount++;
                                    await new Promise(r => setTimeout(r, 2000));
                                }
                            } catch (e) {
                                retryCount++;
                                await new Promise(r => setTimeout(r, 2000));
                            }
                        }
                    } catch (e) {
                        console.error(`Error processing ${wpPost.slug}:`, e.message);
                    }
                }));
            }

            page++;
        }

        console.log(`Sync completed. Total updated: ${totalUpdated}`);
        
        // Final step: Create a merged JSON file for future use
        const allBlogs = await Blog.findAll();
        const fs = require('fs');
        const path = require('path');
        const mergedData = allBlogs.map(b => ({
            slug: b.slug,
            title: b.title,
            image: b.image,
            content: b.content
        }));
        fs.writeFileSync(path.join(__dirname, 'blog_data', 'blog_with_images.json'), JSON.stringify(mergedData, null, 2));
        console.log('Saved updated blog data to blog_data/blog_with_images.json');
        
        process.exit(0);
    } catch (error) {
        console.error('Sync error:', error);
        process.exit(1);
    }
}

syncAll();
