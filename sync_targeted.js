const { Sequelize, DataTypes } = require('sequelize');

async function syncByLocalList() {
    const sequelize = new Sequelize('flymedia_db', 'root', 'root', {
        host: 'localhost', dialect: 'mysql', logging: false
    });

    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        slug: { type: DataTypes.STRING, unique: true },
        image: DataTypes.STRING,
        content: DataTypes.TEXT,
    }, { timestamps: false });

    console.log("Starting targeted sync for missing images...");

    // Find all blogs that still have the default image
    const blogsToUpdate = await Blog.findAll({
        where: {
            image: '/uploads/blog/default.jpg'
        }
    });

    console.log(`Found ${blogsToUpdate.length} blogs to update.`);

    let updated = 0;
    const CONCURRENCY = 2; // Very slow and steady

    for (let i = 0; i < blogsToUpdate.length; i += CONCURRENCY) {
        const batch = blogsToUpdate.slice(i, i + CONCURRENCY);

        await Promise.all(batch.map(async (blog) => {
            try {
                // Search for this post by slug on WordPress
                const res = await fetch(`https://flymediatech.com/wp-json/wp/v2/posts?slug=${blog.slug}`);
                if (!res.ok) return;

                const posts = await res.json();
                if (posts.length === 0) {
                    console.log(`[-] NOT FOUND on WordPress: ${blog.slug}`);
                    return;
                }

                const wpPost = posts[0];
                if (!wpPost.featured_media || wpPost.featured_media === 0) {
                    console.log(`[-] NO FEATURED MEDIA on WordPress: ${blog.slug}`);
                    return;
                }

                // Fetch the media data
                const mediaRes = await fetch(`https://flymediatech.com/wp-json/wp/v2/media/${wpPost.featured_media}`);
                if (!mediaRes.ok) return;

                const mediaData = await mediaRes.json();
                const sourceUrl = mediaData?.media_details?.sizes?.full?.source_url || mediaData?.source_url;

                if (sourceUrl) {
                    const localUrl = sourceUrl.replace('/uploads/', '/uploads/');
                    await blog.update({ image: localUrl });
                    updated++;
                    console.log(`SUCCESS: [${updated}] Updated ${blog.slug}`);
                }
            } catch (e) {
                console.error(`Error syncing ${blog.slug}: ${e.message}`);
            }
        }));

        // Delay between batches
        await new Promise(r => setTimeout(r, 1500));
    }

    console.log(`Targeted sync complete. Updated ${updated} blogs.`);
    process.exit(0);
}

syncByLocalList();
