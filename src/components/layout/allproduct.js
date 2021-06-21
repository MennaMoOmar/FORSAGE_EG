import React from "react";

import Nabvar from "../shared/navbar";
import Footer from "../shared/footer";
import Header from "../allproduct/header";
import Products from "../allproduct/products";

const AllProduct = () => {
  
  return (
    <React.Fragment>
      <div className="allproduct">
        <Nabvar></Nabvar>
        <Header></Header>
        <Products></Products>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};


export default AllProduct;
