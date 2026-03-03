import { talks } from '../data/talks';


const researchInterests = [
  {
    title: 'Bilevel optimization theory and applications',
    img: 'https://via.placeholder.com/120?text=Bilevel',
  },
  {
    title: 'Optimization modeling in energy systems',
    img: 'https://via.placeholder.com/120?text=Energy',
  },
  { title: 'Classical optimization theory', img: 'https://via.placeholder.com/120?text=Classical' },
  { title: 'Variational analysis', img: 'https://via.placeholder.com/120?text=Variational' },
  { title: 'Stochastic optimization', img: 'https://via.placeholder.com/120?text=Stochastic' },
  { title: 'Machine learning for optimization', img: 'https://via.placeholder.com/120?text=ML' },
];

const publications = [
  {
    citation:
      'S. Khe, P. Chaipunya and A. Bangviwat, “A Stackelberg Game of Demand Response from the Aggregator’s Perspective,” 2025 IEEE PES GTD Grand International Conference and Exposition Asia (GTD Asia), Bangkok, Thailand, 2025, pp. 177-181.',
    doi: '10.1109/GTDAsia60461.2025.11313309',
    link: 'https://doi.org/10.1109/GTDAsia60461.2025.11313309',
  },
];

import { useState, useEffect } from 'react';

function HomePage() {
  const [greeting, setGreeting] = useState('');
  const fullGreeting = "Hi, I'm Seangleng Khe";

  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setGreeting(fullGreeting.slice(0, idx + 1));
      idx++;
      if (idx === fullGreeting.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 text-white px-4 opacity-0 fade-in">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-15">
          <img
            src="/mr_photo.jpg"
            alt="Seangleng Khe"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white shadow-lg object-cover"
          />

          <div className="text-center md:text-left">
            <h1 className="text-5xl font-bold mb-4 whitespace-nowrap overflow-hidden border-r-2 border-white animate-pulse">
              {greeting}
            </h1>
            <p className="text-xl mb-10">Aspiring Mathematics & Electrical Engineer</p>
            <div className="space-x-4">
              <a
                href="#"
                className="bg-white text-indigo-500 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
              >
                See Projects
              </a>
              <a
                href="/contact"
                className="border border-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-500 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <a href="#research" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </section>

      <section id="research" className="py-32 bg-slate-50 text-slate-800 px-6 opacity-0 slide-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Research of Interest</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterests.map((r) => (
              <div
                key={r.title}
                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                {r.img && (
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-24 h-24 mb-4 object-cover rounded-full"
                  />
                )}
                <p className="text-lg font-semibold">{r.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="py-16 bg-white text-slate-900 px-6 opacity-0 slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">Publications</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {publications.map((p, i) => (
              <article key={i} className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 hover:bg-indigo-50">
                <p className="text-sm italic text-slate-700 mb-6 leading-relaxed">{p.citation}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-indigo-600 font-medium hover:underline">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a2 2 0 010 2.828l-8 8a2 2 0 01-2.828 0l-4-4a2 2 0 010-2.828l4-4a1 1 0 011.414 1.414L6.414 10H11a1 1 0 010 2H5a1 1 0 01-1-1V5a1 1 0 012 0v4.586l6.293-6.293z" />
                  </svg>
                  View DOI &middot; {p.doi}
                </a>
              </article>
            ))}
            <div className="p-6 flex items-center justify-center text-center text-slate-600">
              <div>
                <p className="font-semibold mb-2">More publications coming soon</p>
                <p className="text-sm">This section will list peer-reviewed papers and conference proceedings as they become available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="talk" className="py-16 bg-slate-50 text-slate-900 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-20 text-center">My Talks</h2>
          <ul className="space-y-6">
            {talks.map((talk) => (
              <li key={talk.title} className="border-l-4 border-indigo-500 pl-4">
                <a href={talk.link} className="text-xl font-semibold hover:underline">
                  {talk.title}
                </a>
                <p className="text-sm text-slate-600">
                  {talk.journal} &middot; {talk.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default HomePage;