import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET || 'super-secret';

export const config = {
  matcher: ['/admin/:path*'],
};

export function middleware(req) {
  const token = req.cookies.get('token')?.value;

  try {
    const user = jwt.verify(token, SECRET);
    if (user.role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  } catch (err) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  return NextResponse.next();
}
