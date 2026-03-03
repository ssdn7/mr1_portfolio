import React from "react";

import { talks } from '../data/talks';


function TalkPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 md:py-32 flex flex-col justify-center items-center bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 text-white text-center px-4 opacity-0 fade-in">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in">
          Talks & Presentations
        </h1>
        <p className="text-lg md:text-xl max-w-2xl animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Selected speaking engagements I've delivered around web development,
          optimization, and engineering.
        </p>
      </section>

      {/* TALKS GRID */}
      <section className="py-16 bg-white dark:bg-slate-900 text-slate-900 dark:text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">My Talks</h2>

          <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {talks.map((t, idx) => (
              <article
                key={t.title}
                className="group bg-gray-50 dark:bg-slate-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition duration-300 tap-pop opacity-0 fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {t.image && (
                  <div className="overflow-hidden">
                    {t.link ? (
                      <a href={t.link} target="_blank" rel="noreferrer">
                        <img
                          src={t.image}
                          alt={t.title}
                          className="w-full h-40 object-cover group-hover:scale-105 transition duration-300 cursor-pointer"
                        />
                      </a>
                    ) : (
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-full h-40 object-cover group-hover:scale-105 transition duration-300"
                      />
                    )}
                  </div>
                )}

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {t.link ? (
                      <a href={t.link} className="hover:text-indigo-600">
                        {t.title}
                      </a>
                    ) : (
                      t.title
                    )}
                  </h3>

                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    {t.journal} · {t.year}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TalkPage;