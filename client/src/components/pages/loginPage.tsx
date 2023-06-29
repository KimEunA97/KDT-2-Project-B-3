import React from 'react';
import Login from '../services/login';
const LoginPage = (): JSX.Element => {
  const style = {
    width: '100%',
    height: '300px',
    backgroundColor: 'yellow',
    border: '1px solid',
  };

  return <div style={style}>
    <Login/>
  </div>;
};

export default LoginPage;
