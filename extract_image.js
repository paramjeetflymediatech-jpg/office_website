async function check() {
    const res = await fetch('https://flymediatech.com/wp-json/wp/v2/posts?search=Search%20Engine%20Poisoning&per_page=1');
    const data = await res.json();
    const content = data[0].content.rendered;
    const match = content.match(/<img[^>]+src="([^">]+)"/);
    console.log(match ? match[1] : 'No image found');
}
check();
