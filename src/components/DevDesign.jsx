import FigmaPNG from '../assets/tech-stack/figma.png'

const DevDesign = () => {
  return (
    <div className='gap-6 text-center mt-12 grid lg:grid-cols-3 sm:grid-cols-2 md:grid-cols-2'>
      <div className='p-4 bg-[#181818]  w-70  h-60 rounded-xl flex flex-col justify-between items-center border border-[#383737]'>
        <img src={FigmaPNG} alt="" className="mb-2" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
        <div className='flex justify-between w-full'>
          <p className='text-left p-2 text-sm'>Figma</p>
          <div className='bg-[#181818] border border-[#272525] p-2 px-4 rounded-full'>
            <p className='text-right text-[#808080] text-sm'>Design</p>
          </div>
        </div>
      </div>
      <div className='p-4 bg-[#181818]  w-70  h-60 rounded-xl flex flex-col justify-between items-center border border-[#383737]'>
        <img src={FigmaPNG} alt="" className="mb-2" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
        <div className='flex justify-between w-full'>
          <p className='text-left p-2 text-sm'>Figma</p>
          <div className='bg-[#181818] border border-[#272525] p-2 px-4 rounded-full'>
            <p className='text-right text-[#808080] text-sm'>Design</p>
          </div>
        </div>
      </div>
      <div className='p-4 bg-[#181818]  w-70  h-60 rounded-xl flex flex-col justify-between items-center border border-[#383737]'>
        <img src={FigmaPNG} alt="" className="mb-2" style={{ marginTop: 'auto', marginBottom: 'auto' }} />
        <div className='flex justify-between w-full'>
          <p className='text-left p-2 text-sm'>Figma</p>
          <div className='bg-[#181818] border border-[#272525] p-2 px-4 rounded-full'>
            <p className='text-right text-[#808080] text-sm'>Design</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DevDesign;