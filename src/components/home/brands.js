import React, { useEffect } from "react";
import { useHistory } from "react-router";

import { connect } from "react-redux";
import { getProducts } from "../../actions/productAction";

const Brands = ({ getProducts, products }) => {
  const history = useHistory();
  const categoriesHandler = () => {
    history.push("/categories");
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);
  //   console.log(products);

  return (
    <React.Fragment>
      <div className="brands">
        <div className="container">
          <h2>الشركات</h2>
          <p className="seeall" onClick={categoriesHandler}>
            عرض الكل
          </p>
          <div className="row">
            {products.map((product) => {
              return (
                <>
                  <div className="col-5 col-md-3 brandcard">
                    <img
                      src={`data:image/png;base64, ${product.brandImage}`}
                      alt="brand"
                    />
                    <div className="brandcard__content">
                      <p className="brandcard__content__name">
                        {product.category} قائمة أدوات
                      </p>
                      <p className="brandcard__content__show">عرض المنتجات</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  products: state.productReducer.products,
});

export default connect(mapStateToProps, { getProducts })(Brands);
