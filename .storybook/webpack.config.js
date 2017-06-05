const path = require('path');

module.exports = {
  module: {
    loaders: [
      {
        test:   /\.scss$/,
        loaders: ['style', 'raw', 'sass'],
        include: path.resolve(__dirname, '../css/')
      },
      {
        test:   /\.css$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../node_modules/rc-tree/assets/')
      },
      {
        test: /\.svg$/,
        loader: 'babel!react-svg'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
