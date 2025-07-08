
const Aboutme = () => {
  return (
    <div id="aboutme" className="max-w-[90%] mx-auto min-h-screen bg-[#171717] text-white py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 uppercase">about me</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
          <div className="space-y-2 sm:space-y-6 text-justify ">
            <p className="text-xs sm:text-base ">
              Hi, I’m Muneeb, a full-stack web developer and final-year Computer Science student passionate about building clean, fast, and scalable web applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and love turning real-world problems into user-friendly digital solutions.
            </p>
            <p className="text-xs sm:text-base">
              I’ve built and deployed complete applications like IncStay Rentals, a full-stack booking platform, and Soma Clothing, a sleek e-commerce frontend. My work reflects a focus on performance, responsiveness, and practical design.
            </p>
            <p className="text-xs sm:text-base">
              I’m currently open to 2025 internship opportunities where I can contribute to real product teams, grow my backend engineering skills, and continue learning from experienced developers.
            </p>
            <p className="hidden sm:block text-xs sm:text-base">
              When I’m not coding, I enjoy exploring new tech stacks, watching developer content, or brainstorming ideas for my next side project.
            </p>
          </div>
          
          <div className="space-y-3 ">
            <div className="border border-gray-600 rounded-lg p-3 sm:p-6 min-h-fit">
              <h3 className="text-2xl font-semibold mb-1">Education</h3>
              <div className="space-y-1">
                <div>
                  <h4 className="font-semibold">Bachelor's in Computer Science</h4>
                  <p className="text-gray-300 text-sm sm:text-base">University of South Asia, Lahore Cantt</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Expected Graduation: 2026</p>
                </div>
                <div>
                  <h4 className="font-semibold">Intermediate in Engineering</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Punjab Group of College Main Campus</p>
                  <p className="text-gray-400 text-xs sm:text-sm">2019 - 2021 </p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-600 rounded-lg p-3 sm:p-6 sm:min-h-55">
              <h3 className="text-2xl font-semibold mb-1">Certifications</h3>
              <div className="space-y-1">
                <div>
                  <h4 className="text-sm sm:text-base">Professional Certificate in Front-End Development</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Meta</p>
                </div>
                <div>
                  <h4 className="text-sm sm:text-base">Complete Full-Stack Web Development Bootcamp</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Udemy</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Aboutme