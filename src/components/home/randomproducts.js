import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { getProductsByCategory } from "../../actions/productAction";

import ProductCard from "../shared/productcard";

const Brands = ({ brand, randomBrandProducts, getProductsByCategory }) => {
  const history = useHistory();
  const productsHandler = (id) => {
    history.push(`/allproduct/${id}`);
  };
  console.log(brand);

  useEffect(() => {
    getProductsByCategory(brand);
  }, []);

  console.log(randomBrandProducts);

  return (
    <React.Fragment>
      <div className="randomproducts">
        <div className="container">
          <div className="randomproducts__name">
            <h4>
              {brand} قائمة أدوات <i class="fas fa-chevron-left"></i>
            </h4>
            <p className="seeall" onClick={() => productsHandler(1)}>
              عرض الكل
            </p>
          </div>
          <div className="row">
            <div className="col-6 col-lg-3">
              <ProductCard
                randomBrandProducts={randomBrandProducts}
              ></ProductCard>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  randomBrandProducts: state.productReducer.randomBrandProducts,
});

export default connect(mapStateToProps, { getProductsByCategory })(Brands);
