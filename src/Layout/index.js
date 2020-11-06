import React from 'react';
import { Layout } from "antd";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "../Container/Login";
import Graphic from "../Container/Graphic";

const PrivateRoute = ({...rest}) => {
  const auth = localStorage.getItem('login')
  return auth ? <Route {...rest}/> : <Redirect to="/login" />
}

const CustomLayout = () => {
  return (
    <Layout.Content>
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path='/' component={Graphic}/>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </Layout.Content>
  );
};

export default CustomLayout;
