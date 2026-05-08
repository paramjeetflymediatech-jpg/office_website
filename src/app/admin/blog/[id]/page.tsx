'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import BlogForm from '@/components/admin/BlogForm';
import { getBlogById, updateBlog } from '@/app/actions/blog';

export default function EditBlogPage() {
  const params = useParams();
  const id = parseInt(params.id as string, 10);
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlog() {
      if (id) {
        const data = await getBlogById(id);
        setBlog(data);
      }
      setLoading(false);
    }
    loadBlog();
  }, [id]);

  const handleSubmit = async (formData: FormData) => {
    return await updateBlog(id, formData);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ff9900]"></div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-md mx-auto mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Article Not Found</h2>
        <p className="text-gray-500 mb-6">The blog post you are trying to edit does not exist or has been deleted.</p>
        <a 
          href="/admin/blog" 
          className="bg-[#ff9900] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-black transition-colors inline-block"
        >
          Go Back
        </a>
      </div>
    );
  }

  return (
    <BlogForm initialData={blog} onSubmitAction={handleSubmit} />
  );
}
