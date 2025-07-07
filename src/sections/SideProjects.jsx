import { HiCode } from "react-icons/hi";
import { PiGitBranchThin } from "react-icons/pi";



const SideProjects = () => {
  const projects = [
    {
      title: "IncStay Rentals",
      subtitle: "Full-Stack MERN Booking Platform",
      description: "Developed a responsive and feature-rich rental booking web application similar to Airbnb. Users can browse listings, book properties, and manage their stays. Property owners can upload rental details and multiple images.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Cloudinary", "Tailwind CSS"],
      features: [
        "Built with the MERN stack using RESTful API architecture",
        "User authentication and protected routes using JWT",
        "Integrated Cloudinary and Multer for multi-image uploads with AVIF format optimization",
        "Dynamic search and filters for location, guest count",
        "Clean and responsive UI built with Tailwind CSS, supporting all screen sizes",
        "Image previews and lazy-loaded components for optimized performance",
        "Production-ready build using Vite, with route scroll reset and error handling"
      ],
      links: {
        github: "https://github.com/muneebimtiazz/incstay_rentals",
        live: "https://incstayrentals.vercel.app"
      }
    },
    {
      title: "Soma Clothing",
      subtitle: "E-commerce Frontend Web App",
      description: "Developed a sleek, fully responsive frontend for Soma Clothing, a fashion-focused e-commerce store with modern UI/UX design and smooth user experience.",
      technologies: ["React", "Tailwind CSS", "React Router", "Context API", "Toastify", "Vercel"],
      features: [
        "Seamless user navigation with React Router and interactive UI components",
        "Functional shopping cart with subtotal, delivery fee, and total price calculations",
        "Centralized state management using React Context API for cart operations",
        "Real-time form validation and error handling using React-Toastify",
        "Filtering and sorting products by category and price in the header"
      ],
      links: {
        github: "https://github.com/muneebimtiazz/soma_clothing",
        live: "https://somaclothing.vercel.app"
      }
    }
  ];

  return (
    <div id="projects" className="max-w-[90%] mx-auto min-h-screen bg-[#171717] text-white py-20">
      <div className="max-w-8xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 uppercase">Side Projects</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 justify-between ">
          {projects.map((project, index) => (
            <div key={index} className="border sm:w-[50%] gap-10 border-gray-600 rounded-lg p-2 sm:p-6 hover:border-gray-400 transition-colors">
              <div className="mb-2">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 text-sm sm:text-base">{project.subtitle}</p>
                <p className="text-gray-400 text-xs sm:text-sm text-justify">{project.description}</p>
                
                <div className="mt-2 flex flex-wrap gap-1 sm:gap-3 items-center justify-center">
                  {project.technologies.map((tech) => (
                    <span className="text-xs sm:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="grid sm:gap-2">
                <div className="sm:block hidden">
                  <h4 className="text-sm sm:text-base">Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <span className="text-gray-400 text-xs sm:text-sm mr-1">•</span>
                        <span className="text-gray-400 text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col justify-center space-y-2">
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition-colors">
                    <HiCode/>
                    <span>View Code</span>
                  </button>
                  
                  <button className="flex items-center justify-center space-x-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                    <PiGitBranchThin/>
                    <span>Live Demo</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideProjects