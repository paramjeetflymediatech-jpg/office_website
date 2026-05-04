'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

interface ClientSEOProps {
  initialTitle?: string;
  initialDescription?: string;
}

export default function ClientSEO({ initialTitle, initialDescription }: ClientSEOProps) {
  const pathname = usePathname();

  useEffect(() => {
    // This runs on every route change
    async function updateMetadata() {
      try {
        // Fetch the specific SEO for this page from our action
        // We'll call a dedicated light-weight fetcher
        const response = await fetch(`/api/seo-meta?path=${encodeURIComponent(pathname)}`);
        const data = await response.json();

        if (data.success && data.seo) {
          document.title = data.seo.title;
          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute('content', data.seo.description || '');
        }
      } catch (error) {
        console.error('Failed to sync client SEO:', error);
      }
    }

    // Don't run on the very first load if we already have initial props
    // but run on every subsequent pathname change
    updateMetadata();
  }, [pathname]);

  return null; // This component doesn't render anything
}
