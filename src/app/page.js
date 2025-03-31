import Image from 'next/image';
import Link from 'next/link';
import Card from '@components/Card';



export default async function Home() {
  // Fetch blog posts from MySQL
  const res = await fetch(`${process.env.BASE_URL}/api/posts`);
  const posts = await res.json();

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 gap-16 sm:p-20 font-sans">
      <main className="text-center space-y-8">

        {/* Buttons */}
        <div className="flex gap-4 items-center justify-center flex-wrap">
          <Link
            href="/blog/new"
            className="rounded-full bg-blue-600 text-white px-5 py-2 hover:bg-blue-700 transition font-medium"
          >
            + Create New Post
          </Link>
        </div>

        {/* Blog Post Cards */}
        <section className="mt-16 text-left">
          <h2 className="text-2xl font-bold mb-6">📚 Blog Posts</h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              id={post.id}
              title={post.title}
              content={post.content}
              created_at={post.created_at}
            />
          ))}
          </div>
        </section>
      </main>

    </div>
  );
}
