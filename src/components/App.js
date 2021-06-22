import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../sass/main.scss";

import Maintenance from "./layout/maintenance";
import Home from "./layout/home";
import Login from "./layout/login";
import AllProduct from "./layout/allproduct";
import ProductDetails from "./layout/productdetails";
import Categories from "./layout/categories";
import HeroSection from "./home/herosection";


const App = () => {
  return (
    <>
      <main>
        <Switch>
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/login" component={Login} />
          <Route path="/allproduct/:id" component={AllProduct} />
          <Route path="/productdetails/:id" component={ProductDetails} />
          <Route path="/categories" component={Categories} />
          <Route path="/herosection" component={HeroSection} />
          <Route path="/home" component={Home} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </main>
    </>
  );
};

export default App;
