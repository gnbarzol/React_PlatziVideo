import React from 'react';
import { withRouter} from 'react-router-dom';

const Login = () => {
  console.log('En login');
  return (
    <h1>En el login</h1>
  );
};

export default withRouter(Login);
