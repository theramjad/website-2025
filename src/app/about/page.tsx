import Navbar from "@/components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-800">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">About</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            For most of my life, I grew up in Manchester, UK. That was until I moved to Cambridge in 2019 for my undergrad in physics.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            After finishing my Bachelor&apos;s, I was fortunate enough to get to work on my own projects. Firstly independently then within my studio{" "}
            <a
              href="https://21dreams.org/"
              className="text-blue-600 dark:text-white hover:underline underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              21 Dreams
            </a>.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            My main hobby these days is learning Japanese.
          </p>
        </section>
      </div>
    </main>
  );
}
