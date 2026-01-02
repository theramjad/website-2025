import Navbar from "@/components/Navbar";

const pressOutlets = [
  {
    name: "AOL",
    mainUrl: "https://www.aol.com/news/why-young-people-leaving-abroad-000257917.html",
    archiveUrl: "https://archive.md/oeKg8",
  },
  {
    name: "BBC",
    mainUrl: "https://www.bbc.com/news/articles/c1kpv1z372lo",
    archiveUrl: "https://archive.md/r8sKB",
  },
  {
    name: "Yahoo News",
    mainUrl: "https://ca.news.yahoo.com/why-young-people-leaving-abroad-000257756.html",
    archiveUrl: "https://archive.md/jJBGU",
  },
  {
    name: "MSN",
    mainUrl: "http://msn.com/en-us/money/careers/why-are-young-people-leaving-to-work-abroad/ar-AA1TbmLk",
    archiveUrl: "https://archive.md/5Shtx",
  },
  {
    name: "The Independent",
    mainUrl: "https://www.independent.co.uk/life-style/young-people-leaving-uk-emigrating-abroad-gen-z-b2694046.html",
    archiveUrl: "https://archive.md/W5LPY",
  },
];

export default function PressPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-800">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 pb-16">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Press</h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">As featured in</p>
          <ul className="space-y-2">
            {pressOutlets.map((outlet) => (
              <li key={outlet.name} className="text-gray-700 dark:text-gray-300">
                <span className="font-medium text-gray-900 dark:text-white">{outlet.name}</span>
                {" — "}
                <a
                  href={outlet.mainUrl}
                  className="text-blue-600 dark:text-white underline hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Article
                </a>
                {" / "}
                <a
                  href={outlet.archiveUrl}
                  className="text-blue-600 dark:text-white underline hover:opacity-80"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Archive
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
