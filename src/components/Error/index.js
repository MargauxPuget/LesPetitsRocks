import './style.scss';

// == images
import imageError from 'src/assets/images/error/imageErreur.jpg';

// == composant

const Error = () => (
  <div className="error">

    <h2 className="error_title">Erreur</h2>
    <div className="error_description">Vous ne vous trouvez pas sur une page connue !</div>
    <img className="error_img" src={imageError} alt="{décoration de la page d'erreur}" />

  </div>
);

export default Error;
