import React, { useEffect } from "react";
import { connect } from "react-redux";

import Nabvar from "../shared/navbar";
import Footer from "../shared/footer";
import Header from "../allproduct/header";
import Products from "../allproduct/products";
import { useParams } from "react-router";
import {
  getProductsByCategory,
  getProducts,
} from "../../actions/productAction";

const AllProduct = ({ categoryProducts, getProductsByCategory }) => {
  const { category } = useParams();

  useEffect(() => {
    getProductsByCategory(category);
  }, []);

  return (
    <React.Fragment>
      <div className="allproduct">
        <Nabvar></Nabvar>
        <Header imageSrc={categoryProducts[0]?.brandImage}></Header>
        <Products
          brandName={categoryProducts[0]?.category}
          categoryProducts={categoryProducts}
        ></Products>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  categoryProducts: state.productReducer.categoryProducts,
});

// export default connect(mapStateToProps, { getProductsByCategory, getProducts })(
//   AllProduct
// );

export default connect(mapStateToProps, { getProductsByCategory, getProducts })(
  AllProduct
);
