import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Startup School - Learn to Build AI Products",
  description:
    "Learn how to build and launch AI-powered products. A comprehensive course covering everything from ideation to launch.",
  alternates: {
    canonical: "/ai-startup-school",
  },
};

export default function AIStartupSchoolLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
