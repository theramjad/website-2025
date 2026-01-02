import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-2xl mx-auto px-6 py-6 flex justify-between items-center">
      <Link
        href="/"
        className="text-gray-900 dark:text-white font-semibold hover:opacity-80 transition-opacity"
      >
        Ray Amjad
      </Link>
      <Link
        href="/press"
        className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
      >
        Press
      </Link>
    </nav>
  );
}
