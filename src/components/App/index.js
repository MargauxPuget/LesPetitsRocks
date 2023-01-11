// == Import
import './styles.css';
import { Routes, Route } from 'react-router-dom';

// == composant
import Header from 'src/components/Header';
import Home from 'src/components/Home';
import Accueil from 'src/components/Accueil';
import NosChiens from 'src/components/NosChiens';
import Error from 'src/components/Error';
import Footer from 'src/components/Footer';

function App() {
  return (
    <div className="container">

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/nos-chiens" element={<NosChiens />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
}

// == Export
export default App;
