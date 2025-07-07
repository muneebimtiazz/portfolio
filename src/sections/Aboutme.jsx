
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
            <p className="text-xs sm:text-lg leading-relaxed">
              I am a final-semester Computer Science student at the University of South Asia, 
              passionate about full-stack web development and building scalable, user-centered applications.
            </p>
            <p className="text-xs sm:text-lg leading-relaxed">
              With hands-on experience in React, Node.js, Express, and MongoDB, I enjoy solving 
              complex challenges and creating efficient, end-to-end solutions.
            </p>
            <p className="text-xs sm:text-lg leading-relaxed">
              I'm currently seeking a 2025 internship to sharpen my skills and contribute 
              meaningfully to impactful software projects.
            </p>
          </div>
          
          <div className="space-y-2">
            <div className="border border-gray-600 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-1 sm:mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Bachelor's in Computer Science</h4>
                  <p className="text-gray-300 text-sm sm:text-base">University of South Asia, Lahore Cantt</p>
                  <p className="text-gray-400 text-xs sm:text-sm">Expected Graduation: 2026 | CGPA: 2.91</p>
                </div>
                <div>
                  <h4 className="font-semibold">Intermediate in Engineering</h4>
                  <p className="text-gray-300 text-sm sm:text-base">Punjab Group of College Main Campus</p>
                  <p className="text-gray-400 text-xs sm:text-sm">2019 - 2021 | Marks: 712/1100</p>
                </div>
              </div>
            </div>
            
            <div className="border border-gray-600 rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-1 sm:mb-4">Certifications</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold">Professional Certificate in Front-End Development</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">Meta</p>
                </div>
                <div>
                  <h4 className="font-semibold">Complete Full-Stack Web Development Bootcamp</h4>
                  <p className="text-gray-300 text-xs sm:text-sm">Udemy</p>
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