/* eslint-disable global-require */
import express from 'express';
import dotenv from 'dotenv';
import webpack from 'webpack';

dotenv.config(); //Busca en el entorno el archivo .env y toma esas variables

const { ENV, PORT } = process.env;
const app = express();

if (ENV === 'development') {
  console.log('Mood development ');
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  //Compiler nos va ayudar a compilar la config de webpack
  const compiler = webpack(webpackConfig);
  const serverConfig = { port: PORT, hot: true };

  app.use(webpackDevMiddleware(compiler, serverConfig));
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="assets/app.css" type="text/css">
      <title>PlatziVideo</title>
  </head>
  <body>
      <div id='app'></div>
      <script src="assets/app.js" type="text/javascript"></script>
  </body>
  </html>
  `);
});

app.listen(PORT, (err) => {
  if (err) console.log(err.message);
  else console.log(`Server running on port ${PORT}`);
});
