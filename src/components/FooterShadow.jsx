import footerShadowIMG from '../assets/footer-shadow.png'

const FooterShadow = () => {
  return (
    <>
      <img src={footerShadowIMG} className='absolute bottom-0 left-0 w-full h-auto pointer-events-none' alt="" />
    </>
  )
}

export default FooterShadow;