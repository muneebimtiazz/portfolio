import pfp from '../assets/shades.png'
import { HiOutlineMail } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";

const Home = () => {
  return (
    <div className="sm:w-full min-h-screen flex flex-col justify-center items-center text-white bg-[#171717]">
      <div className="flex flex-col items-center justify-center px-5">
        <div className="text-center">
          <div className="w-42 h-42 sm:w-60 sm:h-60 mx-auto overflow-hidden">
            <img src={pfp} className="w-full h-full object-cover rounded-full sm:rounded"/>
          </div>
          
          <p className="px-2 py-2 text-xs sm:text-base max-w-md mx-auto leading-relaxed">
            Final-year CS student focused on full-stack MERN development 
            and creating scalable web applications.
          </p>
          
          <div className="flex justify-center space-x-2 text-xs sm:text-base">
            
            <a href="/cv.pdf" download="Muneeb_Imtiaz_CV.pdf" className="flex items-center space-x-1 sm:space-x-2 px-4 py-2 hover:underline">
              <HiDownload className="w-4 h-4" />
              <span>Download CV</span>
            </a>

            <a href="mailto:muneebimtiaz6@gmail.com" className="flex items-center space-x-1 sm:space-x-2 px-4 py-2 hover:underline">
              <HiOutlineMail className="w-4 h-4" />
              <span>Contact Me</span>
            </a>

          </div>
        </div>
        <div className="text-center pt-16">
          <h1 className="text-7xl sm:text-9xl">MUNEEB IMTIAZ</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;