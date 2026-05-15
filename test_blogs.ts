import { getBlogs } from './src/app/actions/blog';
getBlogs().then(b => console.log('BLOGS:', b)).catch(console.error);
