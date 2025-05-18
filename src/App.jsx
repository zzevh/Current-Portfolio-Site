import './styles/index.css';
import FooterShadow from './components/FooterShadow'
import { Analytics } from '@vercel/analytics/react';
import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import GetToKnowMePLUSLetsWork from './components/GetToKnowMePLUSLetsWork';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Photography from './pages/Photography';
import TechStack from './pages/TechStack';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/photography" element={<Photography />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/" element={
          <>
            <Hero />
            <SelectedWork />
            <GetToKnowMePLUSLetsWork />
            <FooterShadow />
            <Analytics />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;