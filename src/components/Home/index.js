import './style.scss';
import { Link } from 'react-router-dom';

// == composant
import Button from 'src/components/form/Button';

const Home = () => (
  <div className="home">
    <h1 className="home_title">Les Petits Rocks</h1>
    <Link to="/accueil" className="home_link">
      <Button
        valueLabel="Entrez"
        name="enter"
        className="home_main_link_button"
      />
    </Link>
  </div>
);

export default Home;
