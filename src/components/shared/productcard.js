import React from 'react'
import { useHistory } from 'react-router'

import URI from "../../apis/URI";

const ProductCard = ({ products }) => {
  const history = useHistory()
  const productDetails = id => {
    history.push(`/productdetails/${id}`)
  }

  return (
    <React.Fragment>
      {products.map(product => {
          return (
              <div className='productcard' key={product._id}>
                <div className='container'>
                  <div className='productcard__image'>
                    <img
                      src={URI + '/api/product/productImg/' + product._id}
                      alt='product'
                    />
                  </div>

                  <div className='productcard__data'>
                    <p>{product.name}</p>
                    <p>الكود {product.code}</p>
                  </div>

                  <div className='productcard__button'>
                    <button
                      className='button mainbtn'
                      onClick={() => productDetails(product._id)}
                    >
                      عرض التفاصيل
                    </button>
                  </div>
                </div>
              </div>
          )
        })}
    </React.Fragment>
  )
}

export default ProductCard
