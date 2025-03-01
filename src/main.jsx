import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.jsx'

import Navbar from './components/Navbar.jsx'
import HeaderShadow from './components/HeaderShadow.jsx'
import Footer from './components/Footer.jsx'

import Noise from './reactBitsComponents/Noise'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={5}
      />

      <HeaderShadow />
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>,
)
