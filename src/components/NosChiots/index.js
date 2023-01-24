import './style.scss';

// == images
import data from 'src/data/categories';

// == composant
console.log(data.nosChiots[0].litter[0].puppy[0]);

const NosChiots = () => (
  <div className="puppies">

    <h2 className="puppies_title">Nos chiots</h2>
    <div className="puppies_description">Voici touts les chiots née et a venir qui participe à l'élèvage. Tiramisu carrot cake jelly-o chocolate toffee liquorice sugar plum wafer. Pudding marshmallow wafer candy canes cookie jelly donut. Fruitcake wafer lemon drops lollipop gummi bears chocolate bar. Candy dessert shortbread cookie gummies liquorice bear claw. Donut muffin candy canes cotton candy chocolate cake halvah. Candy canes candy canes jelly topping topping oat cake. Chupa chups bonbon pastry candy canes sweet jujubes tootsie roll chupa chups. Gummies lemon drops chocolate cake muffin biscuit.</div>

    <div className="puppies_list">

      {data.nosChiots[0].litter.map((litter) => (
        <div className="litter" key={litter.id}>

          <div className="litter_title">
            <h3 className="litter_title_parent">{litter.mother}</h3>
            <p className="litter_title_parent">&</p>
            <h3 className="litter_title_parent">{litter.father}</h3>
          </div>
          <div className="litter_decoration" />
          <div className="litter_information">
            <p className="litter_information_brithday">Chiots nées le {litter.date}</p>
            <p className="litter_information_number">{(litter.numberMale + litter.numberFemale)} chiots</p>
            <p className="litter_information_male">{litter.numberMale} males</p>
            <p className="litter_information_female">{litter.numberFemale} femelles</p>
          </div>
          {/* data.nosChiots[0].litter[0].puppy */}
          <div className="puppy_list">
            {data.nosChiots[0].litter[0].puppy.map((puppy) => (
              <div className="puppy">
                <span className="puppy_sexe">{puppy.sexe === 'f' ? 'Femmelle' : 'Male'}</span>
                <div className="puppy_information">
                  <img className={puppy.state !== 1 ? 'puppy_information_img puppy_information_img--sell' : 'puppy_information_img'} src={puppy.picture} alt="{chien}" />
                  <div className={puppy.state !== 1 ? 'puppy_information_sell' : 'puppy_information_notSell'}>
                    <p>{puppy.firstname}</p>
                    <p>Réserver</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      ))}
    </div> {/* div.puppies_list */}

  </div>
);

export default NosChiots;
