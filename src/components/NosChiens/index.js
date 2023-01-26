import './style.scss';

// == data
import data from 'src/data/categories';

// == composant
// console.log(data.nosChiens[0].dogs);

const NosChiens = () => (
  <div className="dogs">

    <h2 className="dogs_title">Nos chiens</h2>
    <div className="dogs_description">Voici tout les chiens qui participe à l'élèvage. Tiramisu carrot cake jelly-o chocolate toffee liquorice sugar plum wafer. Pudding marshmallow wafer candy canes cookie jelly donut. Fruitcake wafer lemon drops lollipop gummi bears chocolate bar. Candy dessert shortbread cookie gummies liquorice bear claw. Donut muffin candy canes cotton candy chocolate cake halvah. Candy canes candy canes jelly topping topping oat cake. Chupa chups bonbon pastry candy canes sweet jujubes tootsie roll chupa chups. Gummies lemon drops chocolate cake muffin biscuit.</div>

    <div className="dogs_list">

      {data.nosChiens[0].dogs.map((dog) => (
        <div className="dog" key={dog.id}>
          <div className="dog_title">
            <h3 className="dog_title_name">{dog.firstname}</h3>
            <span className="dog_title_sexe">{dog.sexe === 'f' ? 'Femmelle' : 'Male'}</span>
          </div>
          <img className="dog_img" src={dog.picture} alt="{chien}" />
          <div className="dog_descriptionwrap">
            <p className="dog_descriptionwrap_information">
              née le {dog.birthday} <br />
              couleur : {dog.color} <br />
              père: {dog.father} <br />
              mère: {dog.mother}
            </p>
            <p className="dog_descriptionwrap_description">{dog.summary}</p>
          </div>
        </div>
      ))}
    </div> {/* div.dog_list */}

  </div>
);

export default NosChiens;
