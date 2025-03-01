import SpotlightCard from '../reactBitsComponents/SpotlightCard';

import logoPrimes from '../assets/primeslogo.png'
import coverPrimes from '../assets/coverprimes.png'

import logoLunarHub from '../assets/logoLunarHub.png'
import coverLunarHub from '../assets/lunarhubcover.png'

import logoBussly from '../assets/logoBussly.png'
import coverBussly from '../assets/coverbussly2.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const SelectedWork = () => {
  return (
    <section className='w-[65%] mx-auto mt-46 flex-col items-start text-left'>
      <h2 className='text-4xl sm:text-4xl md:text-5xl lg:text-5xl font-bold'>Selected Work</h2>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="#C4FC69">
        <div className=' flex flex-wrap'>
          <div className='flex-col w-full lg:w-1/2'>
            <img src={logoPrimes} className='z-5 w-30 mb-5 mt-5' alt="Logo Primes" />
            <h3 className='text-2xl md:text-3xl lg:text-3xl font-bold'>Primes - Landing Page</h3>
            <p className='text-sm md:text-lg lg:text-lg mt-5 text-[#a5a3a3] max-w-120 mb-26 '>Easy Landing page using react,vite,tailwidcss Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat repellat minus necessitatibus officiis, eos aperiam ad quis provident rem ex maiores saepe dolor voluptatum, velit suscipit eaque omnis pariatur.</p>
            <a href="https://primes.cc" target='_blank' className="z-5 visit-site-link">
              Visit Site <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
            </a>
          </div>
          <div className='w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center'>
            <img className='z-5 hidden sm:block md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] mx-auto' src={coverPrimes} alt="Primes Cover Tumbail" />
          </div>
        </div>
      </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="#A13FD9">
        <div className='flex flex-wrap'>
          <div className='flex-col w-full lg:w-1/2'>
            <img src={logoLunarHub} className='z-5 w-30 mb-5' alt="Logo LunarHub" />
            <h3 className='text-2xl md:text-3xl lg:text-3xl font-bold'>LunarHub - Multi-Page Web </h3>
            <p className='text-sm md:text-lg lg:text-lg mt-5 text-[#a5a3a3] max-w-120 mb-26'>Easy Landing page using react,vite,tailwidcss Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat repellat minus necessitatibus officiis, eos aperiam ad quis provident rem ex maiores saepe dolor voluptatum, velit suscipit eaque omnis pariatur.</p>
            <a href="https://lunarhub.pl" target='_blank' className="visit-site-link">
              Visit Site <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
            </a>
          </div>
          <div className='w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center'>
            <img className='z-5 hidden sm:block md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] mx-auto' src={coverLunarHub} alt="LunarHub Cover Tumbail" />
          </div>
        </div>
      </SpotlightCard>
      <SpotlightCard className="custom-spotlight-card" spotlightColor="#F6D249">
        <div className='flex flex-wrap'>
          <div className='z-5 flex-col w-full lg:w-1/2'>
            <img src={logoBussly} className='w-15' alt="Logo Bussly" />
            <h3 className='text-2xl md:text-3xl lg:text-3xl font-bold'>Bussly - Landing Page</h3>
            <p className='text-sm md:text-lg lg:text-lg mt-5 text-[#a5a3a3] max-w-120 mb-26'>Easy Landing page using react,vite,tailwidcss Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quaerat repellat minus necessitatibus officiis, eos aperiam ad quis provident rem ex maiores saepe dolor voluptatum, velit suscipit eaque omnis pariatur.</p>
            <a href="https://bussly.bkrupka.com" target='_blank' className="visit-site-link">
              Visit Site <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
            </a>
          </div>
          <div className='w-full lg:w-1/2 mt-8 lg:mt-0 flex items-center justify-center'>
            <img className='z-5 hidden sm:block md:w-[400px] lg:w-[500px] xl:w-[600px] 2xl:w-[700px] mx-auto' src={coverBussly} alt="Bussly Cover Tumbail" />
          </div>
        </div>
      </SpotlightCard>
    </section>
  )
}

export default SelectedWork;