import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const contactInfo = {
    email: "shonadeep607@gmail.com",
    phone: "8529081632",
    github: "https://github.com/vershat",
    linkedin: "https://linkedin.com/in/vershaYadav"
  };

  const handleEmailClick = () => {
    window.open(`mailto:${contactInfo.email}`, '_blank');
  };

  const handlePhoneClick = () => {
    window.open(`tel:${contactInfo.phone}`, '_blank');
  };

  const handleGithubClick = () => {
    window.open(contactInfo.github, '_blank');
  };

  const handleLinkedinClick = () => {
    window.open(contactInfo.linkedin, '_blank');
  };

  return (
    <section id="contact" className="bg-gray-200 py-16 px-3">
      <div className="flex justify-center mb-8">
        <h1 className="text-2xl font-semibold text-center text-white bg-purple-600 px-6 py-2 border-4 border-purple-600 rounded-md">
          Reach out to me
        </h1>
      </div>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Get In Touch</h2>
          <p className="text-gray-600">Feel free to reach out through any of these channels</p>
        </div>

        <div className="space-y-4">
          {/* Email */}
          <div 
            onClick={handleEmailClick}
            className="flex items-center p-4 bg-purple-50 rounded-lg cursor-pointer hover:bg-purple-100 transition-colors duration-200 border border-purple-200"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-4">
              <FaEnvelope className="text-white text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Email</h3>
              <p className="text-purple-600">{contactInfo.email}</p>
            </div>
          </div>

          {/* Phone */}
          <div 
            onClick={handlePhoneClick}
            className="flex items-center p-4 bg-green-50 rounded-lg cursor-pointer hover:bg-green-100 transition-colors duration-200 border border-green-200"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center mr-4">
              <FaPhone className="text-white text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">Phone</h3>
              <p className="text-green-600">+91 {contactInfo.phone}</p>
            </div>
          </div>

          {/* GitHub */}
          <div 
            onClick={handleGithubClick}
            className="flex items-center p-4 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 border border-gray-200"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center mr-4">
              <FaGithub className="text-white text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">GitHub</h3>
              <p className="text-gray-600">github.com/vershat</p>
            </div>
          </div>

          {/* LinkedIn */}
          <div 
            onClick={handleLinkedinClick}
            className="flex items-center p-4 bg-blue-50 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors duration-200 border border-blue-200"
          >
            <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-4">
              <FaLinkedin className="text-white text-lg" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-gray-800">LinkedIn</h3>
              <p className="text-blue-600">linkedin.com/in/vershaYadav</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Click on the icons to connect with me directly! 😊
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
