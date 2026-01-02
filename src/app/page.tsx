import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-800">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Hey</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Hey, I&apos;m Ray!
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Right now, I make videos on{" "}
            <a
              href="https://www.youtube.com/@ramjad"
              className="text-blue-600 dark:text-white hover:underline underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>{" "}
            and apps under my own studio{" "}
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
            I also occasionally offer consulting services for startups.
          </p>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">About</h3>
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

        <section>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li>
              <strong className="text-gray-900 dark:text-white">Email</strong>{" "}
              <span className="text-gray-500 dark:text-gray-400">r [at] rayamjad [dot] com</span>
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">LinkedIn</strong>{" "}
              <a
                href="https://www.linkedin.com/in/rayamjad/"
                className="text-blue-600 dark:text-white hover:underline underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rayamjad
              </a>
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Instagram</strong>{" "}
              <a
                href="https://instagram.com/theramjad"
                className="text-blue-600 dark:text-white hover:underline underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @theramjad
              </a>
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">YouTube</strong>{" "}
              <a
                href="https://www.youtube.com/@ramjad"
                className="text-blue-600 dark:text-white hover:underline underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ramjad
              </a>
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">X</strong>{" "}
              <a
                href="https://x.com/ramjad"
                className="text-blue-600 dark:text-white hover:underline underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                @ramjad
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
