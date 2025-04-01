import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = process.env.JWT_SECRET;
const encoder = new TextEncoder();
const secretKey = encoder.encode(SECRET);

export const config = {
  matcher: ['/admin/:path*'], // protect only /admin/*
};

export async function middleware(req) {
  const token = req.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }

  try {
    const { payload } = await jwtVerify(token, secretKey);

    if (payload.role !== 'admin') {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    // Token verified, allow access
    return NextResponse.next();
  } catch (err) {
    console.error('⛔ JWT verification failed:', err.message);
    return NextResponse.redirect(new URL('/login', req.url));
  }
}
