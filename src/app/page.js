import pool from '@/lib/db';

export default async function HomePage() {
  const [posts] = await pool.query('SELECT * FROM posts ORDER BY created_at DESC');

  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Blog Posts</h1>
      <a href="/blog/new" style={{ color: 'blue' }}>+ Create New Post</a>
      <ul style={{ marginTop: '1rem' }}>
        {posts.map(post => (
          <li key={post.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>{new Date(post.created_at).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </main>
  );
}
