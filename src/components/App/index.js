// == Import
import './styles.css';
import { Routes, Route, useLocation } from 'react-router-dom';

// == composant
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Accueil from 'src/components/Accueil';
import NosChiens from 'src/components/NosChiens';
import NosChiots from 'src/components/NosChiots';
import Farming from 'src/components/Farming';
import Error from 'src/components/Error';
import Footer from 'src/components/Footer';

function App() {
  const location = useLocation();

  return (
    <div className="container">

      {location.pathname !== '/' && <Header />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/nos-chiens" element={<NosChiens />} />
        <Route path="/nos-chiots" element={<NosChiots />} />
        <Route path="/notre-elevage" element={<Farming />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

// == Export
export default App;
