import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Users from "../pages/Users";
import Home from "../pages/Home";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
