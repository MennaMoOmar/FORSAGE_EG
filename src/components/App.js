import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../sass/main.scss";

import Maintenance  from './layout/maintenance'
import Home  from './layout/home'

const App = () => {
  return (
    <>
      <main>
        <Switch>
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/home" component={Home} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </main>
    </>
  );
};

export default App;
