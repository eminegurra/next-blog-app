import Link from 'next/link';

export default function Card({ id, title, content, created_at }) {
  return (
    <div className="bg-white dark:bg-gray-900 p-6 border rounded-lg shadow hover:shadow-xl transition">
      <Link href={`/blog/${id}`}>
        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 hover:underline">
          {title}
        </h3>
      </Link>

      <p className="text-gray-700 dark:text-gray-300 mt-2">
        {content.length > 30 ? `${content.slice(0, 30)}...` : content}
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        {new Date(created_at).toLocaleString()}
      </p>

      <div className="mt-4">
        <Link
          href={`/blog/${id}`}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          Read more →
        </Link>
      </div>
    </div>
  );
}
