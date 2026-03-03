import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Optimization in Power Networks",
    description: "Combined mathematical optimization techniques with electrical grid analysis to improve load balancing and efficiency.",
    tech: "Matlab, Python",
    link: "#"
  },
  {
    title: "Mathematical Modeling of Demand Response",
    description: "Formulated and solved optimization problems for demand-side management in energy systems using linear and bilevel models.",
    tech: "GAMS, AMPL",
    link: "#"
  },
  {
    title: "Stochastic Analysis for Renewable Integration",
    description: "Applied probability and stochastic calculus to assess the impact of renewables on electrical network stability.",
    tech: "Python, R",
    link: "#"
  }
];

function ProjectsPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 opacity-0 fade-in">
      <h2 className="text-3xl font-bold mb-8 text-center animate-slide-in">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} className="tap-pop" />
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;