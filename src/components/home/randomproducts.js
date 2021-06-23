import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import { getProductsByCategory, getCategoryById } from '../../actions'

import ProductCard from '../shared/productcard'

const Brands = props => {
  const { getProductsByCategory, getCategoryById, category, products } = props;

  const history = useHistory()

  const categortId = '60d3743940566d2d4881b3fc'

  useEffect(() => {
    getProductsByCategory(categortId)
    getCategoryById(categortId)
  }, [getProductsByCategory, getCategoryById])

  const previewProducts = categortId => {
    history.push(`/allproduct/${categortId}`)
  }

  return (
    <React.Fragment>
      <div className='randomproducts'>
        <div className='container'>
          <div className='randomproducts__name'>
            <h4>
              {category.name} قائمة أدوات <i className='fas fa-chevron-left'></i>
            </h4>
            <p className='seeall' onClick={() => previewProducts(categortId)}>
              عرض الكل
            </p>
          </div>
            <div className="randomproducts__card">
              <ProductCard products={products}></ProductCard>
            </div>
        </div>
      </div>
    </React.Fragment>
  )
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
    category: state.categoryReducer.category
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    getProductsByCategory: categortId =>
      dispatch(getProductsByCategory(categortId)),
    getCategoryById: categortId => dispatch(getCategoryById(categortId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands)
