const { Sequelize, DataTypes } = require('sequelize');

async function syncByTitle() {
    const sequelize = new Sequelize('flymedia_db', 'root', 'root', {
        host: 'localhost', dialect: 'mysql', logging: false
    });

    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        slug: { type: DataTypes.STRING, unique: true },
        image: DataTypes.STRING,
        content: DataTypes.TEXT,
    }, { timestamps: false });

    const blogsToUpdate = await Blog.findAll({
        where: { image: '/uploads/blog/default.jpg' }
    });

    console.log(`Searching for ${blogsToUpdate.length} missing images by title...`);

    let updated = 0;
    for (const blog of blogsToUpdate) {
        try {
            // Encode the title for search
            const searchTitle = encodeURIComponent(blog.title);
            const res = await fetch(`https://flymediatech.com/wp-json/wp/v2/posts?search=${searchTitle}&per_page=1`);
            if (!res.ok) continue;
            
            const posts = await res.json();
            if (posts.length === 0) continue;

            const wpPost = posts[0];
            if (wpPost.featured_media && wpPost.featured_media !== 0) {
                const mediaRes = await fetch(`https://flymediatech.com/wp-json/wp/v2/media/${wpPost.featured_media}`);
                if (mediaRes.ok) {
                    const mediaData = await mediaRes.json();
                    const sourceUrl = mediaData?.media_details?.sizes?.full?.source_url || mediaData?.source_url;
                    if (sourceUrl) {
                        const localUrl = sourceUrl.replace('https://flymediatech.com/wp-content/uploads/', '/uploads/');
                        await blog.update({ image: localUrl });
                        updated++;
                        console.log(`FOUND BY SEARCH: ${blog.slug} -> ${localUrl}`);
                    }
                }
            }
        } catch (e) {
            console.error(`Error: ${e.message}`);
        }
        await new Promise(r => setTimeout(r, 1000));
    }

    console.log(`Search complete. Found ${updated} more images.`);
    process.exit(0);
}

syncByTitle();
