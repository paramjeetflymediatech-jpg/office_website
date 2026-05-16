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

        const tables = ['blogs', 'pageseos'];
        const columns = [
            { name: 'canonicalUrl', type: 'VARCHAR(255) NULL' },
            { name: 'metaRobots', type: "VARCHAR(255) NULL DEFAULT 'index, follow'" },
            { name: 'twitterCard', type: "VARCHAR(255) NULL DEFAULT 'summary_large_image'" }
        ];

        for (const table of tables) {
            console.log(`Checking table: ${table}`);
            const [rows] = await connection.query(`SHOW COLUMNS FROM ${table}`);
            const existingColumns = rows.map(r => r.Field);

            for (const col of columns) {
                if (!existingColumns.includes(col.name)) {
                    console.log(`Adding column ${col.name} to ${table}...`);
                    await connection.query(`ALTER TABLE ${table} ADD COLUMN ${col.name} ${col.type}`);
                    console.log(`Successfully added ${col.name} to ${table}`);
                } else {
                    console.log(`Column ${col.name} already exists in ${table}`);
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
