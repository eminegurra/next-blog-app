'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/posts', {
      method: 'POST',
      body: JSON.stringify({ title, content }),
    });
    router.push('/');
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: '2rem', maxWidth: '600px' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        rows={6}
        style={{ width: '100%', marginTop: '1rem', padding: '0.5rem' }}
      />
      <button
        type="submit"
        style={{ marginTop: '1rem', padding: '0.5rem 1rem', background: 'blue', color: 'white' }}
      >
        Submit
      </button>
    </form>
  );
}
