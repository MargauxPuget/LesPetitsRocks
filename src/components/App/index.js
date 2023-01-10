// == Import
import './styles.css';
import { Routes, Route } from 'react-router-dom';

// == composant
import Home from 'src/components/Home';
import Accueil from 'src/components/Accueil';
import NosChiens from 'src/components/NosChiens';

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/nos-chiens" element={<NosChiens />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

// == Export
export default App;
