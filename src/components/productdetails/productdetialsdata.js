import React, { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";

import DeleteProductModal from "../admin/deleteProductModal";

import URI from "../../apis/URI";

const ProductDetailsData = (props) => {
  const { product, isAdmin } = props;
  const [status, setStatus] = useState(false);

  const history = useHistory();

  return (
    <React.Fragment>
      {status && (
        <DeleteProductModal
          closeModal={() => setStatus(false)}
          id={product._id}
        ></DeleteProductModal>
      )}

      <div className="productdetailsdata">
        <div className="container">
          <div className="row">
            <div className="col-11 col-sm-5 productdetailsdata__details">
              <div className="productdetailsdata__details__div">
                <span className="productdetailsdata__details__div__title">
                  :الكود
                </span>
                <span className="productdetailsdata__details__div__data">
                  {product?.code}
                </span>
              </div>

              <div className="productdetailsdata__details__div">
                <span className="productdetailsdata__details__div__title">
                  :الوصف
                </span>
                <span
                  className="productdetailsdata__details__div__data"
                  dir="rtl"
                >
                  {product?.description}
                </span>
              </div>

              {/* {isAdmin.isAdmin && ( */}
                <div className="productdetailsdata__details__div">
                  <span className="productdetailsdata__details__div__title">
                    :السعر 
                  </span>
                  <span className="productdetailsdata__details__div__data">
                    {product?.price}
                  </span>
                </div>
              {/* )} */}
            </div>
            <div className="col-11 col-sm-5 productdetailsdata__image">
              <img
                src={URI + "/api/product/productImg/" + product?._id}
                alt="product"
              />
            </div>
          </div>
          {isAdmin.isAdmin && (
            <div className="productdetailsdata__Admin__Management">
              <button
                className="mainbtn delete"
                onClick={() => setStatus(true)}
              >
                حذف المنتج
              </button>
              <button
                className="mainbtn edit"
                onClick={() => history.push(`/admin/${product?._id}`)}
              >
                تعديل المنتج
              </button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isAdmin: state.userReducer,
  };
};

export default connect(mapStateToProps, {})(ProductDetailsData);
