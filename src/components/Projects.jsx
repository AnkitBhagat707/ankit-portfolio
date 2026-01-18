const Projects = () => {
  const projects = [
    {
      title: "Personal Portfolio Website",
      description:
        "A modern and responsive portfolio website built using React and Tailwind CSS to showcase my skills, projects, and experience.",
      tech: ["React", "Tailwind CSS", "Vite"],
      live: "#",
      github: "#",
    },
    {
      title: "TrustChain API",
      description:
        "A backend API system designed to manage trust-based verification and secure data flow between services with proper authentication and validation.",
      tech: ["FastAPI", "REST API", "MongoDB"],
      live: "https://frontend-lnz5.vercel.app/",
      github: "#",
    },
    {
      title: "Pipeline Builder (VectorShift Technical Assessment)",
      description:
        "A frontend application to build and visualize data pipelines using a node-based flow editor as part of a real-world technical assessment.",
      tech: ["React", "Custom UI", "API Integration"],
      live: "https://vector-shift-dag-assignment.vercel.app/",
      github: "#",
    },
    {
      title: "Frontend UI (CUBE Technical Assessment)",
      description:
        "A responsive frontend application built as part of a real-world UI developer hiring assignment, focusing on clean design, component architecture, and user experience.",
      tech: ["React", "Modern UI", "Responsive Design"],
      live: "https://cube-ui-assignmentttttttt.vercel.app/",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="w-full px-8 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border rounded-2xl p-6 bg-white hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>

              <p className="text-gray-600 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border rounded-lg hover:bg-gray-100 transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
