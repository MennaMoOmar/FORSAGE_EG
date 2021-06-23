import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { getProductsByCategory } from "../../actions/productAction";

import ProductCard from "../shared/productcard";

const Brands = ({ brand, categoryProducts, getProductsByCategory }) => {
  const history = useHistory();

  console.log(brand);

  useEffect(() => {
    getProductsByCategory(brand);
  }, []);

  console.log(categoryProducts);

  const previewProducts = (category) => {
    history.push(`/allproduct/${category}`);
  };

  return (
    <React.Fragment>
      <div className="randomproducts">
        <div className="container">
          <div className="randomproducts__name">
            <h4>
              {brand} قائمة أدوات <i class="fas fa-chevron-left"></i>
            </h4>
            <p className="seeall" onClick={() => previewProducts(brand)}>
              عرض الكل
            </p>
          </div>
          <div className="row">
            <div className="col-6 col-lg-3">
              <ProductCard categoryProducts={categoryProducts}></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  categoryProducts: state.productReducer.categoryProducts,
});

export default connect(mapStateToProps, { getProductsByCategory })(Brands);
