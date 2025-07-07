const Navbar = () => {
  
  return (
    <div className="pt-6 sticky top-0 z-50 flex justify-center items-center w-full bg-[#171717] text-white">
      <nav className="w-fit h-fit border-1 border-dashed border-white sm:rounded-full px-3 sm:px-6 py-2 ">
        <div className="text-xs space-x-2 flex items-center">
          <a href="#aboutme" className="hover:text-gray-400 transition-colors">About Me</a>
          <span>•</span>
          <a href="#skills" className="hover:text-gray-400 transition-colors">Skills</a>
          <span>•</span>
          <a href="#projects" className="hover:text-gray-400 transition-colors">Side Projects</a>
          <span>•</span>
          <a href="#contactme" className="hover:text-gray-400 transition-colors">Contact Me</a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar