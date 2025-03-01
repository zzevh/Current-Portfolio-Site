import Logo from '../assets/logo.png'

const Footer = () => {
  return (
    <footer className="w-full mx-auto mt-20 sm:mt-30 md:mt-40 lg:mt-46 border-t-1 border-[#212121]">
      <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%] mx-auto flex flex-col sm:flex-row justify-between items-center py-10">
        <div className="text-center sm:text-left">
          <img className='w-20 sm:w-30 mx-auto sm:mx-0' src={Logo} alt="Logo Bkrupka portoflio" />
          <p className='mt-4 text-[#808080] max-w-160'>I’m a front-end developer and UI/UX Designer based in Poland 🇵🇱. I have a passion for building websites and creating design.</p>
          <p className='mt-15 text-[#808080]'>© 2025 Błażej Krupka. All Rights Reserved.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-16 mt-10 sm:mt-0">
          <div>
            <p className="font-bold">Links</p>
            <ul className="font-medium space-y-2 mt-5">
              <li><a className='hover:text-gray-500' href="/">Home</a></li>
              <li><a className='hover:text-gray-500' href="/mywork">Work</a></li>
              <li><a className='hover:text-gray-500' href="/aboutme">About me</a></li>
              <li><a className='hover:text-gray-500' href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Elsewhere</p>
            <ul className="font-medium space-y-2 mt-5">
              <li><a className='hover:text-gray-500' href="https://www.linkedin.com/in/bkrupka/">LinkedIn</a></li>
              <li><a className='hover:text-gray-500' href="https://github.com/zzevh">GitHub</a></li>
              <li><a className='hover:text-gray-500' href="https://discordapp.com/users/1098246840618594324">Discord</a></li>
              <li><a className='hover:text-gray-500' href="https://www.instagram.com/nah.zzehv/">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;