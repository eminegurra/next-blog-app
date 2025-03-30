import pool from '@lib/db';

export default async function BlogPostPage({ params }) {
  const postId = params.id;
  const [rows] = await pool.query('SELECT * FROM posts WHERE id = ?', [postId]);
  const post = rows[0];

  if (!post) {
    return <div className="p-10">Post not found.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-10 space-y-6">
      <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">{post.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {new Date(post.created_at).toLocaleString()}
      </p>
      <div className="text-gray-800 dark:text-gray-200 mt-4">{post.content}</div>
    </div>
  );
}
