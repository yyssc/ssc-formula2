/* eslint-disable object-shorthand */

const Formula = require('./lib/components/Formula').default;

const treeDataShape = require('./lib/shapes/treeDataShape').default;
const 档案转换ItemShape = require('./lib/shapes/档案转换ItemsShape').default;

module.exports = {
  Formula: Formula,

  treeDataShape: treeDataShape,
  档案转换ItemShape: 档案转换ItemShape,
};
