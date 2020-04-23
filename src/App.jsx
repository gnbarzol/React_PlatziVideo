/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
import './assets/styles/App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from './components/Container';
import Login from './components/Login';
import clienteAxios from './config/axios';

const App = () => {
  //Tambien se los puede crear en una carpeta aparte dentro de una funcion y retornando "videos", luego se lo exporta aqui y listo.
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    clienteAxios.get('/initalState')
      .then((response) => {
        setVideos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  //Hasta aqui.

  return (
    <Router>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Login videos={videos} />}
        />

        <Route
          exact
          path='/login'
          component={() => <Login />}
        />
      </Switch>
    </Router>
  );
};

export default App;
