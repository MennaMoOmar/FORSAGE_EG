import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../sass/main.scss";

import Maintenance from "./layout/maintenance";
import Home from "./layout/home";
import Login from "./layout/login";

const App = () => {
  return (
    <>
      <main>
        <Switch>
          {/* <Route path="/" component={Maintenance} /> */}
          <Route path="/home" component={Home} />
          <Redirect from="/" exact to="/home" />
          <Route path="/login" component={Login} />
        </Switch>
      </main>
    </>
  );
};

export default App;
