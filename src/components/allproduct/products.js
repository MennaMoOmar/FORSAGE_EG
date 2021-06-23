import React from 'react'

import ProductCard from '../shared/productcard'

const Products = props => {
  const { categoryName, products } = props

  return (
    <React.Fragment>
      <div className='products'>
        <div className='container'>
          <h4>
            {categoryName} قائمة أدوات <i className='fas fa-chevron-left'></i>
          </h4>
          <div className='products__card'>
            <ProductCard products={products}></ProductCard>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Products
