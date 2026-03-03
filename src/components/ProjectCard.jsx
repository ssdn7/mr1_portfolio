function ProjectCard({ title, description, tech, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-2xl transition transform hover:scale-105 tap-pop opacity-0 fade-in"
      style={{ animationDelay: '0.2s' }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-2">{description}</p>
      <span className="text-sm text-indigo-500 font-medium">{tech}</span>
    </a>
  );
}

export default ProjectCard;