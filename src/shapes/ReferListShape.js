import PropTypes from 'prop-types';

export default PropTypes.arrayOf(PropTypes.shape({
  id: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}));
