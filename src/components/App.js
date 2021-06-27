import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "../sass/main.scss";

import Maintenance from "./layout/maintenance";
import Loading from "./shared/loading";
import Home from "./layout/home";
import Login from "./layout/login";
import AllProduct from "./layout/allproduct";
import ProductDetails from "./layout/productdetails";
import Categories from "./layout/categories";
import HeroSection from "./home/herosection";
import AddCategoryForm from "./admin/addcategoryform"

const App = () => {
  return (
    <>
      <main>
        <Switch>
          <Route path="/maintenance" component={Maintenance} />
          <Route path="/login" component={Login} />
          <Route path="/addcategoryform" component={AddCategoryForm} />
          <Route path="/allproduct/:category" component={AllProduct} />
          <Route path="/productdetails/:id" component={ProductDetails} />
          <Route path="/categories" component={Categories} />
          <Route path="/herosection" component={HeroSection} />
          <Route path="/loading" component={Loading} />
          <Route path="/home" component={Home} />
          <Redirect from="/" exact to="/home" />
        </Switch>
      </main>
    </>
  );
};

export default App;
