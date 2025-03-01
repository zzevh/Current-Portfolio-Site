import './styles/index.css';
import FooterShadow from './components/FooterShadow'

import Hero from './components/Hero';
import SelectedWork from './components/SelectedWork';
import GetToKnowMePLUSLetsWork from './components/GetToKnowMePLUSLetsWork';

function App() {
  return (
    <>
      <Hero />
      <SelectedWork />
      <GetToKnowMePLUSLetsWork />
      <FooterShadow />
    </>
  );
}

export default App;