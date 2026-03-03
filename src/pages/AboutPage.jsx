import React from 'react';

function AboutPage() {
  return (
    <section className="max-w-3xl mx-auto my-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold mb-4 border-b pb-2">About Me</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        I’m a front‑end developer with a passion for building clean, responsive
        web applications. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
      </p>

      <h3 className="text-2xl font-medium mt-6 mb-2">Skills</h3>
      <ul className="list-disc list-inside space-y-1 text-gray-800">
        <li>JavaScript / React</li>
        <li>HTML &amp; CSS</li>
        <li>Node.js / Express</li>
        <li>Git &amp; GitHub</li>
      </ul>
    </section>
  );
}

export default AboutPage;