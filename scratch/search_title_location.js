const http = require('http');

http.get('http://localhost:3000/', (res) => {
  let data = '';
  res.on('data', (chunk) => {
    data += chunk;
  });
  res.on('end', () => {
    console.log('Total HTML length:', data.length);
    const titleIndex = data.indexOf('<title>');
    if (titleIndex !== -1) {
      console.log('Found <title> at index:', titleIndex);
      console.log('Surrounding content:', data.substring(titleIndex - 100, titleIndex + 200));
    } else {
      console.log('<title> tag not found anywhere in raw HTML!');
    }
    
    // Print all occurrences of "Flymedia Technology"
    let index = data.indexOf('Flymedia Technology');
    while (index !== -1) {
      console.log('Occurrence at index:', index, '| context:', data.substring(index - 50, index + 100));
      index = data.indexOf('Flymedia Technology', index + 1);
    }
  });
});
