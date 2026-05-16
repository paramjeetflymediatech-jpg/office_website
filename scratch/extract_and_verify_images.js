const fs = require('fs');
const path = require('path');

const JSON_FILE = 'blog_data/blog_with_meta_id.json';
const SOURCE_BASE = 'public';
const TARGET_DIR = 'blog_data/extracted_images';

async function processImages() {
    try {
        // 1. Create target directory
        if (!fs.existsSync(TARGET_DIR)) {
            fs.mkdirSync(TARGET_DIR, { recursive: true });
            console.log(`Created directory: ${TARGET_DIR}`);
        }

        // 2. Read JSON
        const data = JSON.parse(fs.readFileSync(JSON_FILE, 'utf8'));
        console.log(`Read ${data.length} blog entries from ${JSON_FILE}`);

        let foundCount = 0;
        let missingCount = 0;
        let copiedCount = 0;

        // 3. Extract and check images
        const images = [...new Set(data.map(item => item.image).filter(Boolean))];
        console.log(`Found ${images.length} unique image paths in JSON.`);

        for (const imgPath of images) {
            // Adjust path: JSON has "/uploads/..." -> public/uploads/...
            const relativePath = imgPath.startsWith('/') ? imgPath.slice(1) : imgPath;
            const fullSourcePath = path.join(SOURCE_BASE, relativePath);

            if (fs.existsSync(fullSourcePath)) {
                foundCount++;
                
                // Construct target path with full structure
                const targetPath = path.join(TARGET_DIR, relativePath);
                const targetSubDir = path.dirname(targetPath);

                // Create subdirectories if they don't exist
                if (!fs.existsSync(targetSubDir)) {
                    fs.mkdirSync(targetSubDir, { recursive: true });
                }

                try {
                    fs.copyFileSync(fullSourcePath, targetPath);
                    copiedCount++;
                } catch (err) {
                    console.error(`Error copying ${relativePath}:`, err.message);
                }
            } else {
                missingCount++;
                // console.warn(`Missing: ${fullSourcePath}`);
            }
        }

        console.log('\n--- Summary ---');
        console.log(`Total Unique Images in JSON: ${images.length}`);
        console.log(`Found in public/uploads: ${foundCount}`);
        console.log(`Missing in public/uploads: ${missingCount}`);
        console.log(`Successfully copied to ${TARGET_DIR}: ${copiedCount}`);

    } catch (error) {
        console.error('Fatal error:', error.message);
    }
}

processImages();
