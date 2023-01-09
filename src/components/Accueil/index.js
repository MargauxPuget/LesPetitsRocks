import './style.scss';
import chien from 'src/assets/images/categories/categorie-chien.jpg'

// == composant

const Accueil = () => (
  <div className="accueil">
    <h1 className="accueil_title">Elevages Les Petits Rocks</h1>
    <h2 className="accueil_menu"> Menu</h2>
    <div className="accueil_description">Danish donut chocolate cake tiramisu jelly-o candy canes jujubes chocolate. Chocolate cake gummi bears marshmallow dessert soufflé biscuit. Bear claw liquorice fruitcake icing pudding sweet roll cheesecake. Cupcake chupa chups tootsie roll lemon drops candy canes fruitcake ice cream dragée bear claw. Sweet roll chocolate gummi bears carrot cake jelly beans pudding shortbread sweet roll. Oat cake shortbread jelly tart biscuit. Tiramisu cotton candy macaroon pudding candy macaroon gingerbread.</div>
    <ul className="accueil_list">
      <div className="accueil_categorie">
        <img className="accueil_categorie_img" src={chien} alt="{chien}" />
        <h3 className="accueil_categorie_chiens">Nos chiens</h3>
      </div>
      <div className="accueil_categorie">
        Nos chiots
      </div>
      <div className="accueil_categorie">
        Nos actualités
      </div>
      <div className="accueil_categorie">
        Notre élevage
      </div>
      <div className="accueil_categorie">
        Contact
      </div>
    </ul>
  </div>
);

export default Accueil;
