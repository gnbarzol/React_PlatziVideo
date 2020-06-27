require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

require('./server');
//Como usamos webpack para servir al app instalamos:
//npm install webpack-dev-middleware webpack-hot-middleware --dev