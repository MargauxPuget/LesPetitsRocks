// == Import
import './styles.css';
import { Routes, Route } from 'react-router-dom';

// == composant
import Home from 'src/components/Home';
import Accueil from 'src/components/Accueil';

function App() {
  return (
    <div className="container">

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accueil" element={<Accueil />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

// == Export
export default App;
