import React, { Component } from 'react';
import LoginComponent from '../Component/LoginComponent';

class Login extends Component {
  uploadDataStorage = (data) => {
    localStorage.setItem('login', JSON.stringify(data));
  }
  render() {
    return <LoginComponent loadData={this.uploadDataStorage} />;
  }
}

export default Login;
