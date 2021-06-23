import React from "react";
import { useHistory } from "react-router";

const ProductCard = ({ categoryProducts }) => {
  const history = useHistory();
  const productDetails = (id) => {
    history.push(`/productdetails/${id}`);
  };

  console.log("from the brand card product", categoryProducts);

  return (
    <React.Fragment>
      {categoryProducts &&
        categoryProducts.map((product) => {
          return (
            <>
              <div className="productcard">
                <div className="container">
                  <div className="productcard__image">
                    <img
                      src={`data:image/png;base64, ${product.productImage}`}
                      alt="product"
                    ></img>
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
                </div>
              </div>
            </>
          );
        })}
    </React.Fragment>
  );
};

export default ProductCard;
