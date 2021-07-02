import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { deleteProduct } from "../../actions";

import URI from "../../apis/URI";

const ProductCard = ({
  products,
  deleteProduct,
  isAdmin: { isAdmin, admin },
}) => {
  const history = useHistory();

  const productDetails = (id) => {
    history.push(`/productdetails/${id}`);
  };

  return (
    <React.Fragment>
      {products.map((product) => {
        return (
          <div className="productcard" key={product._id}>
            <div className="container">
              <div className="productcard__image">
                <img
                  src={URI + "/api/product/productImg/" + product._id}
                  alt="product"
                />
              </div>

              <div className="productcard__data">
                <p>{product.name}</p>
                <p>الكود {product.code}</p>
              </div>

              <div className="productcard__button">
                <button
                  className="button mainbtn"
                  onClick={() => productDetails(product._id)}
                >
                  عرض التفاصيل
                </button>
              </div>

              {isAdmin && admin && (
                <div className="productcard__Admin__Management">
                  <i
                    className="far fa-trash-alt fa-lg"
                    onClick={() => deleteProduct(product._id)}
                  ></i>
                  <i
                    className="far fa-edit fa-lg"
                    onClick={() => history.push(`/admin/${product._id}`)}
                  ></i>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.userReducer,
  };
};

export default connect(mapStateToProps, { deleteProduct })(ProductCard);
