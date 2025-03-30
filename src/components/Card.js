import Link from 'next/link';

export default function Card({ id, title, content, created_at }) {
  return (
    <Link
      href={`/blog/${id}`}
      className="block bg-white dark:bg-gray-900 p-6 border rounded-lg shadow hover:shadow-xl hover:border-blue-500 transition"
    >
      <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2 line-clamp-3">{content}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
        {new Date(created_at).toLocaleString()}
      </p>
    </Link>
  );
}