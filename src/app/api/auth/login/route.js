import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '@/lib/db';

const SECRET = process.env.JWT_SECRET || 'super-secret';

export async function POST(req) {
  const { email, password } = await req.json();

  const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
  const user = users[0];

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
  }

  const token = jwt.sign({ id: user.id, role: user.role }, SECRET, { expiresIn: '1d' });

  const res = NextResponse.json({ success: true });
  res.cookies.set('token', token, { httpOnly: true, path: '/' });

  return res;
}
