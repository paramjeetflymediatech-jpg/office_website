'use client';

import React from 'react';
import BlogForm from '@/components/admin/BlogForm';
import { createBlog } from '@/app/actions/blog';

export default function NewBlogPage() {
  return (
    <BlogForm onSubmitAction={createBlog} />
  );
}
