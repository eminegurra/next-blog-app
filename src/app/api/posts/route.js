import pool from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const [rows] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');
    return NextResponse.json(rows);
  } catch (error) {
    console.error('GET error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const { title, content } = await req.json();
    const [result] = await pool.query('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
    return NextResponse.json({ success: true, id: result.insertId });
  } catch (error) {
    console.error('POST error:', error);
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 });
  }
}
