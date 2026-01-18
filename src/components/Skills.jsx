const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python", "FastAPI", "REST API"],
    },
    {
      title: "Database",
      skills: ["MongoDB (NoSQL)", "MySQL"],
    },
    {
      title: "Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Postman",
        "Thunder Client",
        "Vercel",
        "Netlify",
        "Railway",
        "Render",
      ],
    },
  ];

  return (
    <section id="skills" className="w-full px-8 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12">Skills</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="border rounded-2xl p-8 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-6">{category.title}</h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-blue-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
