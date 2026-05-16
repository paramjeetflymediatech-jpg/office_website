const { Sequelize, DataTypes } = require('sequelize');

async function beautySync() {
    const sequelize = new Sequelize('flymedia_db', 'root', 'root', {
        host: 'localhost', dialect: 'mysql', logging: false
    });

    const Blog = sequelize.define('Blog', {
        title: DataTypes.STRING,
        slug: { type: DataTypes.STRING, unique: true },
        image: DataTypes.STRING,
        content: DataTypes.TEXT,
    }, { timestamps: false });

    // Pick some "Golden" images from the existing collection
    const seoImage = '/uploads/2025/04/How-Important-SEO-Elements-Can-Help-You-Rank-Higher-on-Google.jpg';
    const webImage = '/uploads/2025/07/discover-about-the-digital-sucess.png';
    const appImage = '/uploads/2026/05/online-digital-marketing-illustration-concept.png';
    const generalImage = '/uploads/2025/12/Why-is-WordPress-Becoming-the-Most-Popular-Choice-for-Web-Development-Read-to-Find-Out.png';

    const blogsToUpdate = await Blog.findAll({
        where: { image: '/uploads/blog/default.jpg' }
    });

    console.log(`Performing Beauty Sync for ${blogsToUpdate.length} posts...`);

    let updated = 0;
    for (const blog of blogsToUpdate) {
        let bestImage = generalImage;
        const title = blog.title.toLowerCase();

        if (title.includes('seo') || title.includes('search engine') || title.includes('marketing') || title.includes('ranking')) {
            bestImage = seoImage;
        } else if (title.includes('web') || title.includes('design') || title.includes('development') || title.includes('website')) {
            bestImage = webImage;
        } else if (title.includes('app') || title.includes('mobile') || title.includes('android') || title.includes('ios')) {
            bestImage = appImage;
        }

        await blog.update({ image: bestImage });
        updated++;
        console.log(`[BeautySync] Assigned ${bestImage} to ${blog.slug}`);
    }

    console.log(`Beauty Sync complete. ${updated} posts beautified.`);
    process.exit(0);
}

beautySync();
