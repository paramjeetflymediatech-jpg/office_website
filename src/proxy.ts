import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from './lib/auth';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (request.method === 'GET') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);

    if (pathname.startsWith('/admin')) {
      const session = request.cookies.get('session')?.value;
      const cleanPath = pathname.replace(/\/$/, '');
      
      if (cleanPath === '/admin/login' && session) {
        try {
          await decrypt(session);
          return NextResponse.redirect(new URL('/admin/', request.url));
        } catch (error) {}
      }

      if (cleanPath !== '/admin/login' && !session) {
        return NextResponse.redirect(new URL('/admin/login/', request.url));
      }
    }

    return NextResponse.next({
      request: { headers: requestHeaders }
    });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/',
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
