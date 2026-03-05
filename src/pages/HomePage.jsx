import { talks } from '../data/talks';


const researchInterests = [
  {
    title: 'Bilevel optimization theory and applications',
    img: '/img1.jpg',
  },
  {
    title: 'Optimization modeling in energy systems',
    img: '/img5.jpg',
  },
  { title: 'Classical optimization theory', img: '/img3.jpg' },
  { title: 'Variational analysis', img: '/img6.jpg' },
  { title: 'Stochastic optimization', img: '/img2.jpg' },
  { title: 'Game theory', img: '/img4.jpg' },
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
import { Link } from 'react-router-dom';

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
      <section className="relative min-h-screen pt-20 flex items-center bg-gradient-to-r from-indigo-500 via-blue-500 to-indigo-500 dark:from-indigo-800 dark:via-indigo-900 dark:to-indigo-800 text-white dark:text-white px-4 opacity-0 fade-in overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full mix-blend-screen animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full mix-blend-screen animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-15 relative z-10">
          <img
            src="/mr_photo.jpg"
            alt="Seangleng Khe"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 rounded-lg border-4 border-white shadow-lg object-cover hover:scale-110 transition-transform duration-500 animate-float"
          />

          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-slide-in">
              {greeting}
              <span className="inline-block ml-1 animate-blink h-[1em] w-1 bg-white"></span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>Aspiring Mathematics & Electrical Engineer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <a href='#research'
                className="w-full sm:w-auto text-center bg-white text-indigo-500 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 hover:scale-105 hover:shadow-xl tap-pop transition-all duration-300"
              >
                See More
              </a>
              <Link to="/contact"
                className="w-full sm:w-auto text-center border border-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-indigo-500 hover:scale-105 hover:shadow-xl tap-pop transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>

        <a href="#research" className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pt-2">
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

      <section id="research" className="py-32 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 px-6 opacity-0 slide-up">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl hover:underline font-bold mb-8 text-center">Research of Interest</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {researchInterests.map((r, idx) => (
              <div
                key={r.title}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {r.img && (
                  <img
                    src={r.img}
                    alt={r.title}
                    className="w-full h-32 mb-4 object-cover rounded-lg border-2 border-gray-300 hover:border-blue-500 transition-colors duration-300"
                  />
                )}
                <p className="text-lg font-semibold text-slate-800 dark:text-white">{r.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="publications" className="py-16 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 px-6 opacity-0 slide-up">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 hover:underline text-center">Publications</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
            {publications.map((p, i) => (
              <article key={i} className="bg-gray-50 dark:bg-slate-900 rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 hover:bg-indigo-50 dark:hover:bg-indigo-700">
                <p className="text-sm italic text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{p.citation}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-indigo-600 font-medium hover:underline tap-pop active:scale-95 hover:text-white hover:bg-indigo-600 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M12.293 2.293a1 1 0 011.414 0L18 6.586a2 2 0 010 2.828l-8 8a2 2 0 01-2.828 0l-4-4a2 2 0 010-2.828l4-4a1 1 0 011.414 1.414L6.414 10H11a1 1 0 010 2H5a1 1 0 01-1-1V5a1 1 0 012 0v4.586l6.293-6.293z" />
                  </svg>
                  View DOI &middot; {p.doi}
                </a>
              </article>
            ))}
            <div className="p-6 flex items-center justify-center text-center text-slate-600 dark:text-slate-400 hover:scale-105 transition-all duration-300">
              <div>
                <p className="font-semibold mb-2">More publications coming soon</p>
                <p className="text-sm">This section will list peer-reviewed papers and conference proceedings as they become available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="talk" className="py-16 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-200 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold mb-20 text-center">
            <Link to="/talks" className="hover:underline">
              My Talks
            </Link>
          </h2>
          <ul className="space-y-6">
            {talks.map((talk, idx) => (
              <li key={talk.title} className="border-l-4 border-indigo-500 pl-4 hover:border-indigo-700 hover:pl-6 transition-all duration-300 tap-pop" style={{ animationDelay: `${idx * 0.1}s` }}>
                <Link to="/talks" className="text-lg md:text-xl font-semibold hover:text-indigo-600 hover:underline transition-colors duration-300">
                  {talk.title}
                </Link>
                <p className="text-sm text-slate-600 dark:text-slate-400">
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