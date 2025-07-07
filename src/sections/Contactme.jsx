import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { TbPhoneRinging } from "react-icons/tb";






const Contactme = () => {
  return (
    <div id="contactme" className="max-w-[90%] mx-auto min-h-screen bg-[#171717] text-white py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 uppercase">Contact me</h2>
          <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-1 sm:mb-4">Get In Touch</h3>
              <p className="text-gray-300 text-sm sm:text-base text-justify">
                I'm always open to discussing new opportunities, collaborating on projects, 
                or simply connecting with fellow developers. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                    <MdOutlineAlternateEmail className="text-black text-3xl"/>
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm sm:text-base">Email</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">muneebimtiaz6@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                  <TbPhoneRinging className="text-black text-3xl"/>
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm sm:text-base">Phone</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">+92 3220717183</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white bg-opacity-10 rounded-full flex items-center justify-center">
                    <MdLocationPin className="text-black text-3xl"/>
                </div>
                <div>
                  <h4 className="text-gray-300 text-sm sm:text-base">Location</h4>
                  <p className="text-gray-400 text-xs sm:text-sm">Lahore, Punjab, Pakistan</p>
                </div>
              </div>
              

            </div>

            <div className="flex text-center justify-evenly text-xs sm:text-sm">     
              <a href="https://github.com/muneebimtiazz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
                <FaGithub className="text-2xl"/>
                <span>Github</span>
              </a>
              <a href="https://www.linkedin.com/in/muneebimtiazz" rel="noopener noreferrer" target="_blank" className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
                <FaLinkedin className="text-2xl"/>
                <span>LinkedIn</span>
              </a>
              <a href="https://x.com/muneebimtiazz" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 bg-white text-black rounded  hover:bg-gray-200 transition-colors">
                <FaXTwitter className="text-2xl"/>
                <span>Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactme