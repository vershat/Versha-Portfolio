// Simple keyword-based response system for Versha's resume
const getMockResponse = (userQuery) => {
    const query = userQuery.toLowerCase();
    
    // Current work
    if (query.includes('currently') || query.includes('doing') || query.includes('work')) {
        return "Versha is currently working as a Software Development UI Intern at Allen Digital. She works with ReactJs, NextJs, and TypeScript, focusing on frontend development and performance optimization.";
    }
    
    // Education
    if (query.includes('education') || query.includes('degree') || query.includes('college')) {
        return "Versha is pursuing a B.Tech in Electronics and Communication from National Institute of Technology Patna, with a CGPA of 8.22. She is expected to graduate in June 2025.";
    }
    
    // Skills
    if (query.includes('skill') || query.includes('technology') || query.includes('programming')) {
        return "Versha's technical skills include: Programming Languages (C++, JavaScript, Java, Python), Frontend Technologies (ReactJS, NextJS, TypeScript, TailwindCSS), Databases (SQL, MongoDB), and she has strong problem-solving abilities with 700+ problems solved on coding platforms.";
    }
    

    if (query.includes('project')) {
        return "Versha has worked on several projects including: Interactive Portfolio with AI Chatbot, Gmail-Like Messenger in C++, ThellaWallah App (mobile app for food sellers), and participated in Myntra HackerRamp where her team was selected in Top 50 among 400+ teams.";
    }
    
    // Experience
    if (query.includes('experience') || query.includes('intern')) {
        return "Versha has experience as a Software Development UI Intern at Allen Digital, where she worked on score-Booster project (increased student performance by 10%), Master-a-topic project, and performance optimization (reduced LCP by 12% and FCP by 8%).";
    }
    
    // Hobbies/Interests
    if (query.includes('hobby') || query.includes('interest') || query.includes('passion')) {
        return "Based on her resume, Versha is passionate about learning new technologies, exploring AI and its applications, creating user-friendly interfaces, and is always open to new opportunities. She's also a quick learner and enjoys problem-solving.";
    }
    
    // Contact
    if (query.includes('contact') || query.includes('email') || query.includes('phone')) {
        return "You can contact Versha at: Email: shonadeep607@gmail.com, Phone: +91 8529081632, GitHub: github.com/vershat, LinkedIn: linkedin.com/in/vershaYadav";
    }
    
    // Default response
    return "I can help you with information about Versha's education, current work, skills, projects, experience, and contact details. What would you like to know specifically?";
};

const getResponseFromLLM = async (userQuery) => {
    // For now, use the mock response system since the API has permission issues
    return getMockResponse(userQuery);
}

export default getResponseFromLLM;