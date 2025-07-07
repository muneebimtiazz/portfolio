import htmllogo from '../assets/html5.svg';
import csslogo from '../assets/css3.svg';
import javascriptlogo from '../assets/js.svg';
import reactlogo from '../assets/react.svg';
import routerlogo from '../assets/router.svg'
import tailwindlogo from '../assets/tailwindcss.svg';
import radixlogo from '../assets/radixui.svg';
import nodelogo from '../assets/nodejs.svg';
import expresslogo from '../assets/express.svg';
import mongologo from '../assets/mongodb.svg';
import cloudinarylogo from '../assets/cloudinary.svg';
import restlogo from '../assets/rest.svg';
import jwtlogo from '../assets/jwt.svg';
import gitlogo from '../assets/git.svg';
import githublogo from '../assets/github.svg';
import postmanlogo from '../assets/postman.svg';
import npmlogo from '../assets/npm.svg';
import cpplogo from '../assets/cpp.svg';
import sqllogo from '../assets/mysql.svg';
import vercellogo from '../assets/vercel.svg';
import railwayslogo from '../assets/railway.svg';
import figmalogo from '../assets/figma.svg';
import linuxlogo from '../assets/linux.svg';

const Skills = () => {
const technologies = [
  { value: "HTML", image: htmllogo },
  { value: "CSS3", image: csslogo },
  { value: "JavaScript", image: javascriptlogo },
  { value: "React.js", image: reactlogo },
  { value: "Tailwind", image: tailwindlogo },
  { value: "React Router", image: routerlogo },
  { value: "Radix UI", image: radixlogo },
  { value: "Node.js", image: nodelogo },
  { value: "Express.js", image: expresslogo },
  { value: "MongoDB", image: mongologo },
  { value: "RESTful API", image: restlogo },
  { value: "JWT", image: jwtlogo },
  { value: "Cloudinary", image: cloudinarylogo },
  { value: "Git", image: gitlogo },
  { value: "GitHub", image: githublogo },
  { value: "Postman", image: postmanlogo },
  { value: "NPM", image: npmlogo },
  { value: "C++", image: cpplogo },
  { value: "MySQL", image: sqllogo },
  { value: "Vercel", image: vercellogo },
  { value: "Figma", image: figmalogo },
  { value: "Linux", image: linuxlogo },
  { value: "Railway", image: railwayslogo },
];


  return (
    <div id="skills" className="min-h-screen bg-[#171717] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase">Skills</h2>
          <div className="w-24 h-1 bg-white mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-7 md:grid-cols-10 gap-4">
          {technologies.map((item, index) => (
            <div key={index} className="flex flex-col items-center ">
              <div className='bg-white bg-opacity-10 rounded-full sm:rounded p-2 sm:p-2'>
               <div className="flex items-center justify-center">
                <img src={item.image} alt={item.value} className="w-8 h-8 object-contain" />
              </div>
              </div>
               <p className="text-xs sm:text-sm mt-2 ">{item.value}</p>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
