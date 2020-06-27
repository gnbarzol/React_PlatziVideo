import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
/*SERVER SIDE RENDERING*/
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import initialState from './initialState';
/*SSR*/

import reducer from './reducers';
import App from './routes/App';

const history = createBrowserHistory();
const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>, document.getElementById('app'),
);
