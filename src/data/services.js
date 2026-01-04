import { FaCode, FaMobile, FaServer, FaPalette, FaRocket, FaTools } from 'react-icons/fa';

export const services = [
  {
    id: 1,
    icon: FaCode,
    title: "Full Stack Development",
    description: "Building scalable web applications using MERN stack with modern best practices and clean code architecture.",
    features: ["React.js & Next.js", "Node.js & Express", "MongoDB & MySQL", "RESTful APIs"]
  },
  {
    id: 2,
    icon: FaPalette,
    title: "UI/UX Design Implementation",
    description: "Converting designs into pixel-perfect, responsive, and interactive user interfaces with attention to detail.",
    features: ["Responsive Design", "Tailwind CSS", "Modern UI/UX", "Cross-browser Compatible"]
  },
  {
    id: 3,
    icon: FaServer,
    title: "Backend Development",
    description: "Creating robust and secure server-side applications with efficient database design and API development.",
    features: ["API Development", "Database Design", "Authentication & Security", "Server Optimization"]
  },
  {
    id: 4,
    icon: FaMobile,
    title: "Responsive Web Apps",
    description: "Developing mobile-first, responsive applications that work seamlessly across all devices and screen sizes.",
    features: ["Mobile-First Design", "PWA Development", "Performance Optimization", "Touch-Friendly UI"]
  },
  {
    id: 5,
    icon: FaRocket,
    title: "Web Application Deployment",
    description: "Deploying applications to cloud platforms with CI/CD pipelines and ensuring optimal performance.",
    features: ["Vercel & Netlify", "AWS & Render", "Domain Setup", "Performance Monitoring"]
  },
  {
    id: 6,
    icon: FaTools,
    title: "Website Maintenance",
    description: "Providing ongoing support, bug fixes, feature updates, and performance improvements for existing projects.",
    features: ["Bug Fixes", "Feature Updates", "Performance Tuning", "Technical Support"]
  }
];
