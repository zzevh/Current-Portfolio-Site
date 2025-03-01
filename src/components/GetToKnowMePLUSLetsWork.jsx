import meAndMac from '../assets/myandmymac.png'
import techStack from '../assets/techstack.png'

import ClickSpark from '../reactBitsComponents/ClickSpark';
import RollingGallery from '../reactBitsComponents/RollingGallery'
import Carousel from '../reactBitsComponents/Carousel'
import PixelCard from '../reactBitsComponents/PixelCard';

const GetToKnowMePLUSLetsWork = () => {
  return (
    <ClickSpark
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <section className='w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] mx-auto mt-20 sm:mt-30 md:mt-40 lg:mt-46 flex flex-col items-start text-left'>
        <h4 className='text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold'>Get to know me</h4>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 text-center mt-12'>

          <a href="/about" className="block h-full">
            <div className='bg-[#151515] border border-neutral-800 rounded-2xl p-4 h-full flex flex-col justify-between cursor-pointer'>
              <div className='mt-10'>
                <h5 className='font-extrabold text-3xl sm:text-4xl'>About me</h5>
                <p className='text-lg mt-2'>Who I am and what I do</p>
              </div>
              <img className='w-60 sm:w-80 mx-auto' src={meAndMac} alt="IOS MacOS Emoji Bitmoji" />
            </div>
          </a>

          <a href="/techstack" className="block h-full">
            <div className='bg-[#151515] border border-neutral-800 rounded-2xl p-4 h-full flex flex-col justify-between cursor-pointer'>
              <div className='mt-10'>
                <h5 className='font-extrabold text-3xl sm:text-4xl'>Tech Stack</h5>
                <p className='text-lg mt-2 max-w-90 mx-auto'>The dev tools, apps, devices, and games I use and play</p>
              </div>
              <img className='w-60 sm:w-80 mx-auto' src={techStack} alt="Tech Stack, apps and tools" />
            </div>
          </a>

          <a href="/photography" className="block h-full">
            <div className='bg-[#151515] border border-neutral-800 rounded-2xl p-4 h-full flex flex-col justify-between cursor-pointer'>
              <div className='mt-10'>
                <h5 className='font-extrabold text-3xl sm:text-4xl'>Photography</h5>
                <p className='text-lg mt-2 max-w-90 mx-auto'>My photography projects and work</p>
              </div>
              <div className="relative w-full h-60 sm:h-80 flex items-center justify-center">
                <RollingGallery autoplay={true} pauseOnHover={true} />
              </div>
            </div>
          </a>

          <a href="/mywork" className="block h-full">
            <div className='bg-[#151515] border border-neutral-800 rounded-2xl p-4 h-full flex flex-col justify-between cursor-pointer'>
              <div className='mt-10'>
                <h5 className='font-extrabold text-3xl sm:text-4xl'>Projects</h5>
                <p className='text-lg mt-2 max-w-90 mx-auto'>Some of my work</p>
              </div>
              <div className='text-left flex justify-center'>
                <Carousel
                  baseWidth={250}
                  autoplay={true}
                  autoplayDelay={3000}
                  pauseOnHover={true}
                  loop={true}
                  round={false}
                />
              </div>
            </div>
          </a>

        </div>
      </section>

      <section className="hidden sm:hidden md:w-[70%] md:flex lg:flex lg:w-[65%] mx-auto mt-20 sm:mt-30 md:mt-40 lg:mt-46  flex-col text-left">
        <PixelCard variant="blue" className="w-full">
          <div className="absolute flex flex-wrap justify-between items-center gap-8">
            <div>
              <h5 className="text-3xl sm:text-4xl font-extrabold">Let's work together</h5>
              <p className="max-w-140 mt-2 text-[#d5d5d5]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, dicta quasi. Molestiae, neque perspiciatis?
              </p>
            </div>
            <a
              href="/contact"
              className="border border-[#383737] relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 overflow-hidden font-mono font-medium tracking-tighter text-white bg-[#181818] rounded-lg group w-auto sm:w-auto"
            >
              <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#2b2b2b] rounded-full group-hover:w-56 group-hover:h-56"></span>
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-900"></span>
              <span className="relative text-lg">Get in touch</span>
            </a>
          </div>
        </PixelCard>
      </section>
    </ClickSpark>
  )
}

export default GetToKnowMePLUSLetsWork;