import React from 'react';
import { Layout } from "antd";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../Container/Login";

const CustomLayout = () => {
  return (
    <Layout.Content theme="dark">
      <BrowserRouter>
        <Switch>
          <Route exact path='/login' component={Login}/>
        </Switch>
      </BrowserRouter>
    </Layout.Content>
  );
};

export default CustomLayout;
