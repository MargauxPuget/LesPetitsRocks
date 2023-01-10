import './style.scss';
import { Link, NavLink } from 'react-router-dom';

// == images
import chien from 'src/assets/images/categories/categorie-chien.jpg';
import chien2 from 'src/assets/images/categories/categorie-chien2.jpg';
// import chien3 from 'src/assets/images/categories/categorie-chien3.jpg';
import chien4 from 'src/assets/images/categories/categorie-chien4.jpg';
import chien5 from 'src/assets/images/categories/categorie-chien5.jpg';

// == composant

const Accueil = () => (
  <div className="accueil">
    <header>
      <h1 className="accueil_title">Elevages Les Petits Rocks</h1>
      <h2 className="accueil_menu"> Menu</h2>
    </header>
    <div className="">tralala.</div>
    
    <footer className="footer">
      <div className="footer_title">
        <p>Elevage Les Petits Rocks</p>
        <p>75 chemin perdu</p>
        <p>43000 Haute-Loire</p>
      </div>

      <div className="footer_separator" />

      <div className="footer_categories">
        <ul>
          <li>
            <NavLink
              to="/accueil"
              className={({ isActive }) => (
                isActive ? 'footer_categories footer_categories_isActive' : 'footer_categories'
              )}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-chiens"
              className={({ isActive }) => (
                isActive ? 'footer_categories footer_categories_isActive' : 'footer_categories'
              )}
            >
              Nos chiens
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/nos-chiots"
              className={({ isActive }) => (
                isActive ? 'footer_categories footer_categories_isActive' : 'footer_categories'
              )}
            >
              Nos chiots
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/actualites"
              className={({ isActive }) => (
                isActive ? 'footer_categories footer_categories_isActive' : 'footer_categories'
              )}
            >
              Actualités
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/notre-elevage"
              className={({ isActive }) => (
                isActive ? 'footer_categories footer_categories_isActive' : 'footer_categories'
              )}
            >
              Notre élevage
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (
                isActive ? 'footer_categories footer_categories_isActive' : 'footer_categories'
              )}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Accueil;
