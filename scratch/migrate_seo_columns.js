const mysql = require('mysql2/promise');
require('dotenv').config();

async function migrate() {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST || 'localhost',
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || 'Root@123',
        database: process.env.DB_NAME || 'flymedia_db'
    });

    try {
        console.log('Starting migration via raw SQL...');

        // 1. Create tables if they don't exist
        await connection.query(`
            CREATE TABLE IF NOT EXISTS blogs (
                id INT AUTO_INCREMENT PRIMARY KEY,
                title VARCHAR(255) NOT NULL,
                slug VARCHAR(255) NOT NULL UNIQUE,
                content TEXT,
                excerpt TEXT,
                image VARCHAR(255),
                category VARCHAR(100),
                region VARCHAR(50) DEFAULT 'global',
                date VARCHAR(50),
                views INT DEFAULT 0,
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        await connection.query(`
            CREATE TABLE IF NOT EXISTS PageSEOs (
                id INT AUTO_INCREMENT PRIMARY KEY,
                pageUrl VARCHAR(255) NOT NULL UNIQUE,
                title VARCHAR(255) NOT NULL,
                description TEXT,
                keywords TEXT,
                customSchema TEXT,
                ogTitle VARCHAR(255),
                ogDescription TEXT,
                ogImage VARCHAR(255),
                createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
                updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
            )
        `);

        const tables = ['blogs', 'PageSEOs'];
        const columns = [
            { name: 'pageUrl', type: "VARCHAR(255) NOT NULL UNIQUE", only: 'PageSEOs' },
            { name: 'region', type: "VARCHAR(50) DEFAULT 'global'", only: 'blogs' },
            { name: 'views', type: "INT DEFAULT 0", only: 'blogs' },
            { name: 'metaTitle', type: 'VARCHAR(255) NULL', only: 'blogs' },
            { name: 'metaDescription', type: 'TEXT NULL', only: 'blogs' },
            { name: 'focusKeyword', type: 'VARCHAR(255) NULL', only: 'blogs' },
            { name: 'keywords', type: 'TEXT NULL', only: 'blogs' },
            { name: 'schema', type: 'TEXT NULL', only: 'blogs' },
            { name: 'ogTitle', type: 'VARCHAR(255) NULL', only: 'blogs' },
            { name: 'ogDescription', type: 'TEXT NULL', only: 'blogs' },
            { name: 'ogImage', type: 'VARCHAR(255) NULL', only: 'blogs' },
            { name: 'canonicalUrl', type: 'VARCHAR(255) NULL' },
            { name: 'metaRobots', type: "VARCHAR(255) NULL DEFAULT 'index, follow'" },
            { name: 'twitterCard', type: "VARCHAR(255) NULL DEFAULT 'summary_large_image'" }
        ];

        for (const table of tables) {
            console.log(`Checking table: ${table}`);
            const [rows] = await connection.query(`SHOW COLUMNS FROM ${table}`);
            const existingColumns = rows.map(r => r.Field);

            for (const col of columns) {
                // If the column is restricted to a specific table, check it
                if (col.only && col.only !== table) continue;
                
                if (!existingColumns.includes(col.name)) {
                    console.log(`Adding column ${col.name} to ${table}...`);
                    await connection.query(`ALTER TABLE ${table} ADD COLUMN \`${col.name}\` ${col.type}`);
                    console.log(`Successfully added ${col.name} to ${table}`);
                }
            }
        }

        console.log('Migration completed successfully!');
    } catch (error) {
        console.error('Migration failed:', error);
    } finally {
        await connection.end();
        process.exit();
    }
}

migrate();
