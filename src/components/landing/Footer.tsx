"use client";

import Link from "next/link";

interface FooterProps {
  siteName: string;
  contactEmail: string;
}

export const Footer = ({ siteName, contactEmail }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo */}
          <div className="text-white font-semibold text-lg tracking-tight">
            {siteName}
          </div>

          {/* Links */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm">
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>

          {/* Bottom section */}
          <div className="flex flex-col items-center gap-2 pt-6 border-t border-gray-800 w-full">
            <div className="text-xs text-gray-500">
              © {currentYear} {siteName}. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
