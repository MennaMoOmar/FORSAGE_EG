import React from 'react'

import URI from '../../apis/URI';

const ProductDetailsData = props => {
  const { product } = props;

  return (
    <React.Fragment>
      <div className='productdetailsdata'>
        <div className='container'>
          <div className='row'>
            <div className='col-11 col-sm-5 productdetailsdata__details'>
              <div className='productdetailsdata__details__div'>
                <span className='productdetailsdata__details__div__title'>
                  :الكود
                </span>
                <span className='productdetailsdata__details__div__data'>
                  {product?.code}
                </span>
              </div>

              <div className='productdetailsdata__details__div'>
                <span className='productdetailsdata__details__div__title'>
                  :الوصف
                </span>
                <span className='productdetailsdata__details__div__data'>
                  {product?.description}
                </span>
              </div>

              <div className='productdetailsdata__details__div'>
                <span className='productdetailsdata__details__div__title'>
                  :السعر بالجملة
                </span>
                <span className='productdetailsdata__details__div__data'>
                  {product?.price}
                </span>
              </div>
            </div>
            <div className='col-11 col-sm-5 productdetailsdata__image'>
              <img
                src={URI + '/api/product/productImg/' + product?._id}
                alt='product'
              />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProductDetailsData
