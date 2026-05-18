const fs = require('fs');
const path = require('path');

const ids = [
  5709, 5715, 6313, 6306, 6303, 6298, 6344, 6340, 6335, 6330,
  5726, 6321, 6316, 6326, 5710, 5367, 5364, 6294, 6290, 5356,
  6285, 6225, 6217, 5403, 5711, 6095, 5818, 5713, 5815, 5765,
  5763, 5760, 5725, 5724, 5723, 5722, 5706, 5721, 5720, 5719,
  5718, 5717, 5716, 5714, 5712, 5396, 5389, 5383, 5371, 5362,
  5360, 5353, 5347, 5344, 5338, 5341, 5335, 5331, 5327, 5323,
  5318, 5313, 5316, 5310, 5307, 5304, 5299, 5284, 5280, 5276,
  5272, 5269, 5265, 5260, 5257, 5253, 5245, 5242, 5239, 5235,
  5230, 5227, 5222, 5219, 5215, 5210, 5200, 5197, 5193, 5188,
  5184, 5179, 5174, 5165, 5161, 5158, 5154, 5151, 5148, 5144
];

async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchAllPosts() {
  const results = [];
  console.log(`[Fetch] Starting to fetch ${ids.length} posts...`);

  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    let success = false;
    let attempts = 0;

    while (!success && attempts < 3) {
      attempts++;
      try {
        const response = await fetch(
          `https://flymediatech.com/australia/wp-json/wp/v2/posts/${id}?_embed`
        );

        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }

        const data = await response.json();
        results.push(data);
        success = true;
        console.log(`[Fetch] [${i + 1}/${ids.length}] Successfully fetched ID: ${id}`);
      } catch (error) {
        console.error(`[Fetch] Error fetching ID ${id} (Attempt ${attempts}/3):`, error.message);
        if (attempts < 3) {
          await sleep(1000); // Wait 1s before retrying
        }
      }
    }

    // Rate limiting: sleep 150ms between requests
    await sleep(150);
  }

  console.log(`[Fetch] Completed. Successfully fetched ${results.length}/${ids.length} posts.`);

  const outputPath = path.join(__dirname, '../blog_data/australia_blog.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`[Fetch] Saved all fetched posts to ${outputPath}`);
}

fetchAllPosts();
