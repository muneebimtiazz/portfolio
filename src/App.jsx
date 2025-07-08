import Navbar from "./components/Navbar.jsx"
import Home from './sections/Home.jsx'  
import TrippyScroll from './sections/TrippyScroll.jsx'
import Aboutme from './sections/Aboutme.jsx'
import Skills from './sections/Skills.jsx'
import SideProjects from './sections/SideProjects.jsx'
import Contactme from './sections/Contactme.jsx'

function App() {
  return (
     <div className="bg-[#171717]">
      <Navbar/>
      <Home/>
      <TrippyScroll/>
      <Aboutme />
      <Skills />
      <SideProjects />
      <Contactme />
    </div>
  )
}

export default App