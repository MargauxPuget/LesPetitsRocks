import './style.scss';
import { NavLink } from 'react-router-dom';


// == composant

const Footer = () => (
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
);

export default Footer;
