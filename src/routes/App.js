import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Player from '../components/Player';
import Layout from '../components/Layout';

//El layout es para la persistencia de datos, es decir, mantener el header y footer siempre.
const App = () => {

    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/player/:id" component={Player} />
                    <Route component={NotFound} /> 
                </Switch>
            </Layout>
            
        </BrowserRouter>
    );
};

export default App;

/*
El componente de React Router llamado "Link" nos sirve para: (No)
Mnajar la configuracion de nuestras apps y navegar en nuestra app de forma dinamica a traves de rutas

¿Qué es un Action?
Son un bloque de informacon que evnia datos desde tu aplicacion a tu reducer(No)

¿En que lenguaje esta inspirado Redux?
elm

Para qué nos sirve "mapDispatchToProps"
Recibe el metodo dispath() y devulve los props que deseas utilziar en el componete

¿En que paradigma esta basado Redux?
Flux
*/
