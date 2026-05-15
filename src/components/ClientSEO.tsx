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
    async function updateMetadata() {
      try {
        const response = await fetch(`/api/seo-meta?path=${encodeURIComponent(pathname)}`);
        if (!response.ok) return;

        const text = await response.text();
        try {
          const data = JSON.parse(text);
          if (data?.success && data?.seo) {
            document.title = data.seo.title;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', data.seo.description || '');
          }
        } catch (parseError) {
          // Gracefully catch any HTML error pages or non-JSON responses
        }
      } catch (error) {
        console.error('Failed to sync client SEO:', error);
      }
    }

    updateMetadata();
  }, [pathname]);

  return null;
}
