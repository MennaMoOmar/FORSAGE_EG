import React from "react";

const ProductDetailsData = ({ product }) => {
  console.log(product);
  return (
    <React.Fragment>
      <div className="productdetailsdata">
        <div className="container">
          <div className="row">
            <div className="col-5 productdetailsdata__details">
              <div className="productdetailsdata__details__div">
                <span className="productdetailsdata__details__div__title">
                  :الكود
                </span>
                <span className="productdetailsdata__details__div__data">
                  {product.code}
                </span>
              </div>

              <div className="productdetailsdata__details__div">
                <span className="productdetailsdata__details__div__title">
                  :الوصف
                </span>
                <span className="productdetailsdata__details__div__data">
                  {product.description}
                </span>
              </div>

              <div className="productdetailsdata__details__div">
                <span className="productdetailsdata__details__div__title">
                  :السعر بالجملة
                </span>
                <span className="productdetailsdata__details__div__data">
                  {product.price}
                </span>
              </div>
            </div>
            <div className="col-5 productdetailsdata__image">
              <img
                src={`data:image/png;base64, ${product.productImage}`}
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductDetailsData;
