// == Import : npm
import PropTypes from 'prop-types';
import '../style.scss';

// == Composant
const Button = ({
  // name label
  valueLabel,
  // nom du button
  name,
  className,
}) => (
  <button
    // infos de base
    type="submit"
    className={className}
    name={name}
  >
    {valueLabel}
  </button>
);

Button.propTypes = {
  valueLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

// Valeurs par défaut pour les props
Button.defaultProps = {
  className: 'field-button',
};

// == Export
export default Button;
