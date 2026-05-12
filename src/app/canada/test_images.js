const fs = require('fs');
const content = fs.readFileSync('C:\\Users\\TEch\\.gemini\\antigravity\\brain\\0b61b777-bbe9-4ce5-b820-823e7049865f\\.system_generated\\steps\\1389\\content.md', 'utf8');
const regex = /https?:\/\/[^\s)\"\']+\.(?:png|jpg|jpeg|gif|webp|avif)/gi;
const matches = new Set();
let match;
while ((match = regex.exec(content)) !== null) {
  matches.add(match[0]);
}
console.log(Array.from(matches).join('\n'));
