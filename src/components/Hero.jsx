const Hero = () => {
  return (
    <section className="w-[65%] mx-auto mt-36 flex flex-col items-start text-left">
      <h1 className="text-5xl font-bold">
        <p className='text-[#808080] block sm:hidden md:hidden lg:hidden'>Hi 👋</p>
        <p className='text-5xl sm:text-5xl md:text-5xl lg:text-5xl'><span className="text-[#808080]">I’m</span> <br className='sm:hidden lg:hidden md:hidden' /> Błażej Krupka</p>
      </h1>
      <p className="mt-4 text-[#a5a3a3] max-w-2xl w-full sm:w-auto">
        I’m a front-end developer and UI/UX Designer based in Poland 🇵🇱. I have a passion for building websites and creating design.
      </p>
      <div className="mt-6 md:flex lg:flex sm:flex grid gap-4 w-full sm:w-auto">

        <a href="/contact" className="border-1 border-[#383737] text-lg px-12 py-3 bg-[#181818] text-center text-white rounded-lg hover:bg-[#2b2b2b] transition cursor-pointer w-full sm:w-auto">Contact me</a>

        <a href="/contact" className="border-1 border-[#383737] relative inline-flex items-center justify-center px-10 py-4 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#181818] rounded-lg group w-full sm:w-auto">
          <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#2b2b2b] rounded-full group-hover:w-56 group-hover:h-56"></span>
          <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-900"></span>
          <span className="relative">Get in touch</span>
        </a>
      </div>
    </section>
  )
}

export default Hero;