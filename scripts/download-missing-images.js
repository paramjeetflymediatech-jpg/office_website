require('dotenv').config();
const fs = require('fs');
const path = require('path');
const https = require('https');
const mysql = require('mysql2/promise');

function downloadFile(url, destPath) {
  return new Promise((resolve, reject) => {
    // Ensure destination directory exists
    const dir = path.dirname(destPath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const file = fs.createWriteStream(destPath);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download: Status Code ${response.statusCode}`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => { }); // Delete partial file
      reject(err);
    });
  });
}

async function startDownload() {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'root',
      database: process.env.DB_NAME || 'flymedia_db',
    });

    console.log('[Media Sync] Connected to database. Scanning for blogs...');
    const [rows] = await connection.execute(
      "SELECT id, slug, image, region FROM blogs"
    );

    console.log(`[Media Sync] Found ${rows.length} blogs in database. Checking images...`);

    let downloaded = 0;
    let existing = 0;
    let failed = 0;

    for (const row of rows) {
      let imagePath = row.image;
      if (!imagePath || !imagePath.startsWith('/uploads/')) {
        continue;
      }

      // Path on disk
      const localDiskPath = path.join(__dirname, '../public', imagePath);

      if (fs.existsSync(localDiskPath)) {
        existing++;
        continue;
      }

      // File does not exist locally. We need to download it from live WP
      const relativePart = imagePath.replace('/uploads/', '');

      // Determine the correct live WP remote URL based on region
      let remoteUrl = '';
      if (row.region === 'australia') {
        remoteUrl = `https://flymediatech.com/australia/wp-content/uploads/${relativePart}`;
      } else {
        remoteUrl = `/uploads/${relativePart}`;
      }

      console.log(`[Media Sync] Missing: ${imagePath}`);
      console.log(`              Downloading from: ${remoteUrl}`);

      try {
        await downloadFile(remoteUrl, localDiskPath);
        downloaded++;
        console.log(`[Media Sync] SUCCESS [${downloaded}]: Saved locally to public${imagePath}`);
      } catch (err) {
        failed++;
        console.error(`[Media Sync] FAILED to download image for ${row.slug}:`, err.message);
      }
    }

    console.log('\n--- Sync Summary ---');
    console.log(`Already Present (Local): ${existing}`);
    console.log(`Downloaded Successfully: ${downloaded}`);
    console.log(`Failed to Download:      ${failed}`);
    console.log('--------------------\n');

  } catch (err) {
    console.error('[Media Sync] Fatal Error:', err.message);
  } finally {
    if (connection) await connection.end();
  }
}

startDownload();
