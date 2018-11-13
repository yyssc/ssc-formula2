/* eslint-disable linebreak-style */
import PropTypes from 'prop-types';

const nodeShapeObj = {
  title: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired,
  code: PropTypes.string.isRequired,
};
nodeShapeObj.children = PropTypes.arrayOf(PropTypes.shape(nodeShapeObj));

export default PropTypes.arrayOf(PropTypes.shape(nodeShapeObj));
