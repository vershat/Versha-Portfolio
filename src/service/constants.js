export const GOOGLE_DRIVE_FILE_URL =
  "https://drive.google.com/file/d/1CwAqCkV3Gfye7thvUVlb9nlJzvrrDAJa/view?usp=sharing";
  
export const SYSTEM_PROMPT = (resumeContent) => `
    You are a specialized chatbot designed to provide information from my resume.
    Your role is to answer questions about my professional background based solely on the details provided in the document.  
    When responding, try to extract and share the relevant details, including dates, project names, tools and technologies, and accomplishments. 
    You are not intended to provide interpretations, inferences, or information beyond what is written in the resume. If you are unsure about the answer to a question or the resume doesn't clearly provide the information, respond with "I'm sorry, but my knowledge is limited to what's explicitly written in the Versha's resume, and I cannot answer that question."
    When asked about a skill or area of expertise, refer to the relevant section of the resume and name the section or job title you are quoting.
    Do not embellish or add any information not on my resume. The resume Content is a followed:
    ${resumeContent}`;

export const HUGGINGFACE_API =
  "https://api-inference.huggingface.co/models/gpt2";

  export const RESUME_CONTENT = `VERSHA

Contact: 8529081632 | shonadeep607@gmail.com | linkedin.com/in/vershaYadav | github.com/vershat

Education
National Institute of Technology Patna                                                Dec. 2021 - June 2025
Bachelors of Technology in Electronics and Communication                              8.22 CGPA

Experience

Software Development Engineer I                                                       August 2025 - Present
Allen Digital                                                                         Bengaluru (Onsite)
• Worked with the Test and Assessment Journey Team (Front-end Team)
• Implemented the Ideal-Async feature, enabling students to create personalized study plans and track progress with a modern, user-friendly UI, improving engagement and learning outcomes.
• Resolved production issues and high-priority bugs via Sentry, improving user experience and system reliability.
• Tech-stack used: ReactJS, Next.JS, Typescript, Redux-toolkit

Software Development Intern                                                           Feb - Aug 2025
Allen Digital                                                                         Bengaluru (Onsite)
• Worked on the following Projects:
• Score-Booster - Built engaging UI features including performance dashboards, gamified progress badges, and personalized task recommendations, leading to a 10% improvement in student performance.
• Master-a-topic - Developed an interactive learning module with flashcards, videos, quizzes, and revision notes to help students achieve deeper mastery of topics.
• Result Page Optimization - Optimized performance by reducing Largest Contentful Paint (LCP) by 12% and First Contentful Paint (FCP) by 8%, enhancing page load speed and user experience.

Myntra HackerRamp Participant                                                         April 2024
Tech-Stack Used: ReactJS, FireBase, Figma                                             Patna, Bihar
• Proposed an impactful solution to implement fashion tips and Q&A page to improve user engagement by 20%.
• Selected in the Top 50 Teams among 400+ teams for the solution's impact and innovation.

Projects

Gmail-Like Messenger | C++, Data Structures, Algorithms                               June 2024
• Designed a system in C++ with account management and email functionality which supports single-session login.
• Supporting account creation, user login/logout, and message organization (message star/unstar, read/unread, delete).
• Integrated doubly linked lists for managing user data, two singly linked lists for handling messages of a user.

Interactive Portfolio with AI Chatbot | Deployed Link                                 Dec 2024
• Built a personal portfolio website to showcase skills, projects, and experience with an interactive interface.
• Integrated a chatbot to provide conversational responses about my resume

Technical Skills
Programming Languages: C++, JavaScript, Java
Frontend Technologies: HTML, CSS, ReactJS, NextJS, TypeScript
Core Concepts: Data Structures and Algorithms, Database Management System, Operating System, Object-Oriented Programming
Version Control & Tools: Git, GitHub, Visual Studio, Cursor AI
Soft Skills: Team Work, Time Management, Problem Solving and Ability to learn new things quickly.

Achievements
• 2nd Rank in the 'Code the Uncoded' coding competition organized by IEEE Club, NIT Patna.
• LeetCode: Reached a maximum rating of 1686 and solved more than 619 problems.
• CodeChef: 3 Star rating with maximum rating of 1637, ranked in top 10%.
• 2nd Position, in the intramural basketball tournament organized by NIT Patna.

Positions of Responsibility
• Volunteer Teacher - SANKALP Initiative, mentored 15-20 underprivileged students
• Google Developer Student-Club, Member of DSA team (coding club).

`