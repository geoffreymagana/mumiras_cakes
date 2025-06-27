
import {NextRequest, NextResponse} from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except for:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /_static (inside /public)
     * 4. all root files inside /public (e.g. /favicon.ico)
     */
    '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
  ],
};

export default async function middleware(req: NextRequest) {
  const url = req.nextUrl;
  const hostname = req.headers.get('host') || 'mumirascakes.com';

  const currentHost =
    process.env.NODE_ENV === 'production' && process.env.VERCEL === '1'
      ? hostname
          .replace(`.mumirascakes.com`, '')
          .replace(`.vercel.app`, '')
      : hostname.replace(`.localhost:9002`, '');
      
  // Handle subdomain routing for admin, app, and dispatch
  if (currentHost === 'admin') {
    url.pathname = `/admin${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (currentHost === 'app') {
    url.pathname = `/app${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  if (currentHost === 'dispatch') {
    url.pathname = `/dispatch${url.pathname}`;
    return NextResponse.rewrite(url);
  }

  // Handle path-based routing for vercel.app URLs or direct path access
  if (
    url.pathname.startsWith('/admin') ||
    url.pathname.startsWith('/app') ||
    url.pathname.startsWith('/dispatch')
  ) {
    return NextResponse.next();
  }

  // Everything else is the main site, so rewrite to the /site directory
  url.pathname = `/site${url.pathname}`;
  return NextResponse.rewrite(url);
}
