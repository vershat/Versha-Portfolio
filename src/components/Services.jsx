
function Services() {
  const skills = [
    { title: "Problem Solving", description: "Strong problem-solving abilities with 700+ problems solved on LeetCode, GeeksforGeeks, HackerRank, and CodeChef" },
    { title: "Data Structures & Algorithms", description: "Proficient in implementing and optimizing data structures and algorithms for efficient problem-solving" },
    { title: "Frontend Development", description: "Familiar with React, Next.js, and TypeScript for building modern web applications" },
    { title: "Programming Languages", description: "Proficient in C++, Java, and JavaScript for various development tasks" },
    { title: "Computer Science Fundamentals", description: "Strong foundation in Operating Systems, Object-Oriented Programming, and Database Management Systems" },
    { title: "AI Tools & Productivity", description: "Comfortable using ChatGPT, Cursor, Claude, and DeepSeek to enhance productivity, debug code, and accelerate learning" },
  ];

  return (
    <section id="services" className="py-20 bg-white px-10">
      <div className="bg-purple-600 text-white text-center rounded-lg p-4 w-fit mx-auto mb-10">
        <h1 className="text-4xl font-bold">Skills</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg border border-gray-300 shadow-lg text-center hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-bold text-purple-600 mb-4">{skill.title}</h2>
            <p className="font-semibold text-gray-800">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
