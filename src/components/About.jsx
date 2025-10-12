import versha from "../assets/versha.jpeg"

function About() {
  return (
    <section id="about" className="flex flex-col justify-between md:flex-row items-center py-20 px-10 bg-white">
      <div className="w-full md:w-1/2">
        <img
          src={versha}
          alt="About Me"
          className="rounded-full mx-auto w-72 h-72 object-cover shadow-lg"
        />
      </div>
      <div className="w-full md:pr-16 md:w-1/2 mt-10 md:mt-0 md:ml-10">
        <div className="border border-gray-300 rounded-lg font-bold p-6 bg-gray-50 shadow-sm min-h-[300px] flex flex-col justify-center">
          <p className="text-gray-600 mb-4">
            Myself Versha Yadav, a recent graduate from NIT Patna with a B.Tech in Electronics and Communication.I am currently working as a Software Development UI Intern at Allen Digital.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Skilled in web development</li>
            <li>Focused on creating User-friendly interfaces</li>
            <li>Exploring AI and its applications</li>
            <li>Passionate about learning new technologies</li>
            <li>Always open to new opportunities</li>
            <li>A quick learner</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
