import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "My personal portfolio built with React and Tailwind.",
    tech: "React, Tailwind, Vite",
    link: "#"
  },
  {
    title: "E-commerce App",
    description: "Online store demo with cart and checkout features.",
    tech: "React, Tailwind, Firebase",
    link: "#"
  }
];

function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;