import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from './lib/auth';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/admin')) {
    const session = request.cookies.get('session')?.value;
    const cleanPath = pathname.replace(/\/$/, '');

    if (cleanPath === '/admin/login') {
      if (session) {
        try {
          await decrypt(session);
          return NextResponse.redirect(new URL('/admin/', request.url));
        } catch (error) {
          // Token expired or invalid, clear cookie so user can log in cleanly
          const response = NextResponse.next();
          response.cookies.set({
            name: 'session',
            value: '',
            expires: new Date(0),
            path: '/',
          });
          return response;
        }
      }
    } else {
      if (!session) {
        return NextResponse.redirect(new URL('/admin/login/', request.url));
      }

      try {
        await decrypt(session);
      } catch (error) {
        // Token expired or invalid, clear cookie and redirect to login
        const response = NextResponse.redirect(new URL('/admin/login/', request.url));
        response.cookies.set({
          name: 'session',
          value: '',
          expires: new Date(0),
          path: '/',
        });
        return response;
      }
    }
  }

  if (request.method === 'GET') {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-pathname', pathname);

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
