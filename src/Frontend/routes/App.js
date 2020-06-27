import React from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
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
                    <Route component={NotFound} /> 
                </Switch>
            </Layout>
            
        </BrowserRouter>
    );
};

export default App;
