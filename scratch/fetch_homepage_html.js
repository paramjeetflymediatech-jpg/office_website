const http = require('http');
const fs = require('fs');
const path = require('path');

http.get('http://localhost:3000/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    const headStart = data.indexOf('<head>');
    const headEnd = data.indexOf('</head>');
    if (headStart !== -1 && headEnd !== -1) {
      const headHtml = data.substring(headStart, headEnd + 7);
      fs.writeFileSync(path.join(__dirname, 'homepage_head_output.html'), headHtml);
      console.log('Successfully saved head tag content.');
    } else {
      fs.writeFileSync(path.join(__dirname, 'homepage_full_output.html'), data);
      console.log('Saved full content since head tags were not matched perfectly.');
    }
  });
}).on('error', (err) => {
  console.error('Error fetching page:', err.message);
});
