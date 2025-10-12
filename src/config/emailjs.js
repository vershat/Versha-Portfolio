// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS User ID (Public Key)
  // Get this from: https://dashboard.emailjs.com/admin/account
  USER_ID: "ep13YOmeY3peCNuTM",
  
  // Your EmailJS Service ID
  // Get this from: https://dashboard.emailjs.com/admin
  SERVICE_ID: "service_uyubuk5",
  
  // Your EmailJS Template ID
  // Get this from: https://dashboard.emailjs.com/admin/templates
  TEMPLATE_ID: "template_3g6jlpp",
  
  // Your email address where you want to receive messages
  TO_EMAIL: "shonadeep607@gmail.com",
  
  // Your WhatsApp number (optional - for future integration)
  WHATSAPP_NUMBER: "8529081632"
};

// Template variables that should match your EmailJS template
export const TEMPLATE_VARIABLES = {
  to_name: "{{to_name}}",      // Your name (Versha)
  from_name: "{{from_name}}",  // Sender's name
  from_email: "{{from_email}}", // Sender's email
  message: "{{message}}"       // Sender's message
}; 