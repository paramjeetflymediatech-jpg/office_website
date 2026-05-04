import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Only inject headers for GET requests to avoid breaking POST body streams (Fixes "Unexpected end of form")
  if (request.method === 'GET') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);

    // 2. Admin Auth Check for GET requests
    if (pathname.startsWith('/admin')) {
      const session = request.cookies.get('session')?.value;
      
      if (pathname === '/admin/login' && session) {
        try {
          await decrypt(session);
          return NextResponse.redirect(new URL('/admin', request.url));
        } catch (error) {}
      }

      if (pathname !== '/admin/login' && !session) {
        return NextResponse.redirect(new URL('/admin/login', request.url));
      }
    }

    return NextResponse.next({
      request: { headers: requestHeaders }
    });
  }

  // 3. For POST requests (Server Actions), let them through untouched to avoid body corruption
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Explicitly match root for SEO
    '/',
    // Match all other paths except static assets
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
