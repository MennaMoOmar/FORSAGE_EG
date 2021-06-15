import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../sass/main.scss";

import Home  from './layout/home'

const App = () => {
  return (
    <>
      <main>
        <Switch>
          <Route path="/home" component={Home} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </main>
    </>
  );
};

export default App;
