import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import DeleteProductModal from "../admin/deleteProductModal";

import URI from "../../apis/URI";

const ProductCard = ({ products, isAdmin: { isAdmin, admin } }) => {
  const history = useHistory();

  const productDetails = (id) => {
    history.push(`/productdetails/${id}`);
  };

  const handleDelete = (id) => {
    setStatus(true);
    setProductId(id);
  };

  const [status, setStatus] = useState(false);
  const [productId, setProductId] = useState(null);

  return (
    <React.Fragment>
      {status && (
        <DeleteProductModal
          closeModal={() => setStatus(false)}
          id={productId}
        ></DeleteProductModal>
      )}

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

              <div className="productcard__data" dir="rtl">
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
                    onClick={() => handleDelete(product._id)}
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

export default connect(mapStateToProps, {})(ProductCard);
