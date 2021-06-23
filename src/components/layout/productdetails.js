import React, { useEffect } from "react";
import { connect } from "react-redux";

import Nabvar from "../shared/navbar";
import Footer from "../shared/footer";
import Header from "../productdetails/header";
import ProductDetailsData from "../productdetails/productdetialsdata";
import RandomProducts from "../home/randomproducts";
import { useParams } from "react-router";
import { getProductById } from "../../actions/productAction";

const ProductDetails = ({ product, getProductById }) => {
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
  }, [getProductById,id]);

  console.log(product);

  return (
    <React.Fragment>
      <div className="productdetails">
        <Nabvar></Nabvar>
        <Header
          category={product?.category}
          logoImageSrc={product?.brandImage}
        ></Header>
        <ProductDetailsData product={product}></ProductDetailsData>
        <RandomProducts brand={product?.category}></RandomProducts>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  product: state.productReducer.product,
});

export default connect(mapStateToProps, { getProductById })(ProductDetails);
