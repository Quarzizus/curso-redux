import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Users from "../pages/Users";
import Home from "../pages/Home";
import Publications from "../pages/Publications";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/users" component={Users} />
          <Route exact path="/users/:userId" component={Publications} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
