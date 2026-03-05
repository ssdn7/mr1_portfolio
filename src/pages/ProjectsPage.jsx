import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Stochastic Optimization with Metropolitan Electricity Authority (MEA), Bangkok, Thailand',
    list: [
      'Optimal Transformer Maintenance Scheduling Under Uncertain Power Demand',
      'Optimal Demand Response Design',
      'Optimal Management of a Smart Grid',
      'Capacity Expansion Under Uncertainty',
    ],
    tech: 'Feb, 2026',
    link: '#',
  },
  {
    title: 'Elliptic PDEs in Numerical Simulation with Agence Universitaire de la francophonie',
    list: [
      'Solve Elliptic PDEs using FEM, FDM',
    ],
    tech: 'March, 2023',
    link: '#',
  },
];

function Projects() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100 pt-16 fade-in">
        My Projects
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 sm:px-15 md:px-20  text-slate-900 dark:text-white ">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            list={project.list}
            tech={project.tech}
            link={project.link}
            delay={index * 0.1} // staggered fade-in
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;