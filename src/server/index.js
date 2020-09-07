require('ignore-styles');
require('@babel/polyfill'); //Para poder trabajar con async await
require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[hash].[ext]',
})

require('./server');
//Como usamos webpack para servir al app instalamos:
//npm install webpack-dev-middleware webpack-hot-middleware --dev