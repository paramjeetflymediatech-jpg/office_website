const mysql = require('mysql2/promise');

async function getBlogIds() {
    try {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'flymedia_db'
        });

        console.log('Connected to database.');
        const [rows] = await connection.execute('SELECT id, slug FROM blogs');
        
        console.log(`Fetched ${rows.length} blogs.`);
        const fs = require('fs');
        const path = require('path');
        const outputPath = path.join(process.cwd(), 'blog_data', 'db_blog_ids.json');
        
        fs.writeFileSync(outputPath, JSON.stringify(rows, null, 2));
        console.log(`Saved IDs to ${outputPath}`);
        
        await connection.end();
    } catch (err) {
        console.error('Error:', err.message);
    }
}

getBlogIds();
