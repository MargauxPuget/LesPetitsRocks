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
    <div className="accueil_description">Danish donut chocolate cake tiramisu jelly-o candy canes jujubes chocolate. Chocolate cake gummi bears marshmallow dessert soufflé biscuit. Bear claw liquorice fruitcake icing pudding sweet roll cheesecake. Cupcake chupa chups tootsie roll lemon drops candy canes fruitcake ice cream dragée bear claw. Sweet roll chocolate gummi bears carrot cake jelly beans pudding shortbread sweet roll. Oat cake shortbread jelly tart biscuit. Tiramisu cotton candy macaroon pudding candy macaroon gingerbread.</div>
    <ul className="accueil_list">
      <Link to="/nos-chiens" className="accueil_categorie_link">
        <div className="accueil_categorie">
          <img className="accueil_categorie_img" src={chien} alt="{chien}" />
          <div className="accueil_categorie_titlewrap">
            <h3 className="accueil_categorie_titlewrap_title">Nos chiens</h3>
          </div>
        </div>
      </Link>
      <Link to="/nos-chiots" className="accueil_categorie_link">
        <div className="accueil_categorie">
          <img className="accueil_categorie_img" src={chien2} alt="{chien2}" />
          <div className="accueil_categorie_titlewrap">
            <h3 className="accueil_categorie_titlewrap_title">Nos chiots</h3>
          </div>
        </div>
      </Link>
      <Link to="/nos-actualites" className="accueil_categorie_link">
        <div className="accueil_categorie">
          <img className="accueil_categorie_img" src={chien5} alt="{chien5}" />
          <div className="accueil_categorie_titlewrap">
            <h3 className="accueil_categorie_titlewrap_title">Nos actualités</h3>
          </div>
        </div>
      </Link>
      <Link to="/notre-elevage" className="accueil_categorie_link">
        <div className="accueil_categorie">
          <img className="accueil_categorie_img" src={chien4} alt="{chien4}" />
          <div className="accueil_categorie_titlewrap">
            <h3 className="accueil_categorie_titlewrap_title">Notre élevage</h3>
          </div>
        </div>
      </Link>
      <Link to="/contact" className="accueil_categorie_link">
        <div className="accueil_categorie">
          <img className="accueil_categorie_img" src={chien5} alt="{chien5}" />
          <div className="accueil_categorie_titlewrap">
            <h3 className="accueil_categorie_titlewrap_title">Contact</h3>
          </div>
        </div>
      </Link>
    </ul>
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
              to="messages"
              className={({ isActive }) =>
              isActive ? 'footer_categories' : 'footer_categories footer_categories_isActive'
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>Nos chiens</li>
          <li>Nos chiots</li>
          <li>Actualités</li>
          <li>Notre élevage</li>
          <li>Contact</li>
        </ul>
      </div>
    </footer>
  </div>
);

export default Accueil;
