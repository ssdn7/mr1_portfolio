function ProjectCard({ title, list, tech, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col justify-between bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-2xl transition transform hover:scale-105 opacity-0 fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="text-gray-600 dark:text-gray-200 mb-4">
        <ul className="list-disc list-inside space-y-1 hover:text-indigo-600 transition-colors duration-300">
          {list.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
      <span className="text-sm text-indigo-500 font-medium mt-auto">{tech}</span>
    </a>
  );
}

export default ProjectCard;