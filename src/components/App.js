import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "../reducers";
import { Router } from "react-router";

import "../sass/main.scss";

import Maintenance from "./layout/maintenance";
import Loading from "./shared/loading";
import Home from "./layout/home";
import Login from "./layout/login";
import AllProduct from "./layout/allproduct";
import ProductDetails from "./layout/productdetails";
import Categories from "./layout/categories";
import HeroSection from "./home/herosection";
import About from "./home/about";
import AddCategoryForm from "./admin/addcategoryform";
import AddProductForm from "./admin/addproductform";
import Alert from "./shared/Alert";
import history from "../components/history";

import { composeWithDevTools } from "redux-devtools-extension";
import { LOGOUT } from "../actions/types";
import { AdminLoaded } from "../actions";
import Admin from "./admin/Admin";
const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

const App = () => {
  useEffect(() => {
    //if user or admin logged in load his/her data
    if (store.getState().userReducer.token) {
      store.dispatch(AdminLoaded());
    }
    window.addEventListener("storage", () => {
      if (!localStorage.token) {
        store.dispatch({ type: LOGOUT });
      }
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Router history={history}>
            <main>
              <Alert />
              <Switch>
                <Route path="/maintenance" component={Maintenance} />
                <Route path="/login" component={Login} />
                <Route path="/addcategoryform" component={AddCategoryForm} />
                <Route path="/addproductform" component={AddProductForm} />
                <Route path="/allproduct/:category" component={AllProduct} />
                <Route path="/productdetails/:id" component={ProductDetails} />
                <Route path="/categories" component={Categories} />
                <Route path="/herosection" component={HeroSection} />
                <Route path="/about" component={About} />
                <Route path="/loading" component={Loading} />
                <Route path="/home" component={Home} />
                <Route path="/admin/:id" component={Admin} />
                <Route path="/admin" component={Admin} />
                <Redirect from="/" exact to="/home" />
              </Switch>
            </main>
          </Router>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
