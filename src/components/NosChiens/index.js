import './style.scss';
import { Link } from 'react-router-dom';

// == images
import chien from 'src/assets/images/categories/categorie-chien.jpg';
import data from 'src/data/categories.js';

// == composant

const NosChiens = () => (
  <div className="dogs">

    <h2 className="dogs_title">Nos chiens</h2>
    <div className="dogs_description">Voici tout les chiens qui participe à l'élèvage. Tiramisu carrot cake jelly-o chocolate toffee liquorice sugar plum wafer. Pudding marshmallow wafer candy canes cookie jelly donut. Fruitcake wafer lemon drops lollipop gummi bears chocolate bar. Candy dessert shortbread cookie gummies liquorice bear claw. Donut muffin candy canes cotton candy chocolate cake halvah. Candy canes candy canes jelly topping topping oat cake. Chupa chups bonbon pastry candy canes sweet jujubes tootsie roll chupa chups. Gummies lemon drops chocolate cake muffin biscuit.</div>

    <div className="dogs_list">
      <div className="dog">
        <div className="dog_title">
          <h3 className="dog_title_name">AAAllu</h3>
          <span className="dog_title_sexe">Femmelle</span>
        </div>
        <img className="dog_img" src={chien} alt="{chien}" />
        <div className="dog_descriptionwrap">
          <p className="dog_descriptionwrap_description">
            née le 05 juillet 2022 <br />
            couleur : camel <br />
            père: aku <br />
            mère: louma
          </p>
        </div>
      </div>

      <div className="dog">
        <div className="dog_title">
          <h3 className="dog_title_name">Alou</h3>
          <span className="dog_title_sexe">Femmelle</span>
        </div>
        <img className="dog_img" src={chien} alt="{chien}" />
        <div className="dog_descriptionwrap">
          <p className="dog_descriptionwrap_description">
              née le 05 juillet 2022 <br />
              couleur : camel <br />
              père: aku <br />
              mère: louma
            </p>
        </div>
      </div>
      <div className="dog">
        <div className="dog_title">
          <h3 className="dog_title_name">Aku</h3>
          <span className="dog_title_sexe">Male</span>
        </div>
        <img className="dog_img" src={chien} alt="{chien}" />
        <div className="dog_descriptionwrap">
          <p className="dog_descriptionwrap_description">
            née le 05 juillet 2022 <br />
            couleur : camel <br />
            père: aku <br />
            mère: louma
          </p>
        </div>
      </div>
      <div className="dog">
        <div className="dog_title">
          <h3 className="dog_title_name">Kiva</h3>
          <span className="dog_title_sexe">Femmelle</span>
        </div>
        <img className="dog_img" src={chien} alt="{chien}" />
        <div className="dog_descriptionwrap">
          <p className="dog_descriptionwrap_description">
            née le 05 juillet 2022 <br />
            couleur : camel <br />
            père: aku <br />
            mère: louma
          </p>
        </div>
      </div>
    </div> {/* div.dog_list */}

  </div>
);

export default NosChiens;
