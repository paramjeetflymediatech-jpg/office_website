const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'blog_data', 'pageseos_dump.json');
if (!fs.existsSync(filePath)) {
    console.log('pageseos_dump.json does not exist');
    process.exit(0);
}

console.log('Loading pageseos_dump.json...');
const json = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Check type of json: array or table export
console.log('Type of JSON root:', Array.isArray(json) ? 'Array' : typeof json);
if (Array.isArray(json)) {
    console.log('Length:', json.length);
    console.log('First item:', JSON.stringify(json[0], null, 2));
    
    // Find any items that contain '/canada'
    const canadaItems = json.filter(item => {
        const url = String(item.pageUrl || item.pageurl || item.url || '');
        return url.toLowerCase().includes('canada');
    });
    console.log(`Found ${canadaItems.length} items with 'canada' in URL:`);
    console.log(JSON.stringify(canadaItems.slice(0, 10), null, 2));
} else {
    // If it's a phpMyAdmin structure
    const tableObj = json.find ? json.find(obj => obj.type === 'table') : null;
    if (tableObj) {
        console.log('Table name:', tableObj.name);
        console.log('Records:', tableObj.data ? tableObj.data.length : 0);
        if (tableObj.data) {
            const canadaItems = tableObj.data.filter(item => {
                const url = String(item.pageUrl || item.pageurl || item.url || '');
                return url.toLowerCase().includes('canada');
            });
            console.log(`Found ${canadaItems.length} items with 'canada' in URL:`);
            console.log(JSON.stringify(canadaItems.slice(0, 10), null, 2));
        }
    } else {
        console.log('Keys in object:', Object.keys(json));
    }
}
