import Logo from '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  return (

    <header className='mt-10 rounded-2xl w-[65%] bg-[#09090b] border border-[#5E5E5E] flex flex-col md:flex-row justify-between items-center p-5 px-8 md:px-8 mx-auto'>


      <img src={Logo} className='w-[75px] h-[30px] md:mb-0 md:mr-auto' alt="Logo Bkrupka portoflio" />

      <ul className='hidden md:flex space-x-8'>
        <a href="/"><li className='text-lg p-2 hover:bg-gray-600  hover:px-8 hover:rounded-lg transition-all 0.3s ease-in-out'>Home</li></a>
        <a href="/mywork"><li className='text-lg p-2  hover:bg-gray-600 hover:px-8 hover:rounded-lg transition-all 0.3s ease-in-out'>Work</li></a>
        <a href="/aboutme"><li className='text-lg p-2 hover:bg-gray-600 hover:px-8 hover:rounded-lg transition-all 0.3s ease-in-out'>About me</li></a>
        <a href="/techstack"><li className='text-lg p-2 hover:bg-gray-600 hover:px-8 hover:rounded-lg transition-all 0.3s ease-in-out'>Tech Stack</li></a>
        <a href="/photography"><li className='text-lg p-2 hover:bg-gray-600 hover:px-8 hover:rounded-lg transition-all 0.3s ease-in-out'>Photograpy</li></a>

      </ul>

      <div className='hidden sm:block sm:mt-5 space-x-6 text-center items-center justify-center md:ml-auto md:mt-0'>
        <a href="https://www.behance.net/zehv" target='_blank'><FontAwesomeIcon className='sm:text-xl text-lg p-2  hover:bg-gray-600 hover:px-5 hover:rounded-lg transition-all 0.3s ease-in-out' icon={faBehance} /></a>
        <a href="https://www.instagram.com/nah.zzehv/" target='_blank'><FontAwesomeIcon className='sm:text-xl text-lg p-2 hover:bg-gray-600 hover:px-5 hover:rounded-lg transition-all 0.3s ease-in-out' icon={faInstagram} /></a>
        <a href="https://github.com/zzevh" target='_blank'><FontAwesomeIcon className='sm:text-xl text-lg p-2 hover:bg-gray-600  hover:px-5 hover:rounded-lg transition-all 0.3s ease-in-out' icon={faGithub} /></a>
      </div>
    </header>
  )
}

export default Navbar;