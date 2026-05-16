const b = require('./blog_data/blog.json');
const urls = new Set();
b.forEach(p => {
    const matches = p.content.match(/https?:\/\/[^\s"'>]+\.(jpg|jpeg|png|gif|svg)/gi);
    if (matches) matches.forEach(m => urls.add(m));
});
console.log(JSON.stringify(Array.from(urls), null, 2));
