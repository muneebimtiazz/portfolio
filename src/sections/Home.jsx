import pfp from '../assets/shades.png'
import { HiOutlineMail } from "react-icons/hi";
import { HiDownload } from "react-icons/hi";

const Home = () => {
  return (
    <div className="sm:w-full min-h-screen flex flex-col justify-center items-center text-white bg-[#171717]">
      <div className="flex flex-col items-center justify-center px-5">
        <div className="text-center">
          <div className="w-60 h-60 mx-auto overflow-hidden">
            <img src={pfp} className="w-full h-full object-cover rounded-full sm:rounded"/>
          </div>
          
          <p className="px-2 py-2 max-w-md mx-auto leading-relaxed">
            Final-year CS student focused on full-stack MERN development 
            and creating scalable web applications.
          </p>
          
          <div className="flex justify-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 hover:underline ">
              <HiDownload className='w-4 h-4 '/>
              <span>Download CV</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 hover:underline ">
              <HiOutlineMail className='w-4 h-4 ' />
              <span>Contact me</span>
            </button>
          </div>
        </div>
        <div className="text-center pt-6">
          <h1 className="text-7xl sm:text-8xl">MUNEEB IMTIAZ</h1>
        </div>
      </div>
    </div>
  );
};

export default Home;