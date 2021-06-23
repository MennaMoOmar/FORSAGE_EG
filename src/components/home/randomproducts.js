import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import { getProductsByCategory, getCategoryById } from '../../actions'

import ProductCard from '../shared/productcard'

const RandomProducts = props => {
  const {
    getProductsByCategory,
    getCategoryById,
    category,
    products,
    categoryId
  } = props

  const history = useHistory()

  // const categoryId = '60d3743940566d2d4881b3fc'

  useEffect(() => {
    getProductsByCategory(categoryId)
    getCategoryById(categoryId)
  }, [getProductsByCategory, getCategoryById,categoryId])

  const previewProducts = categoryId => {
    history.push(`/allproduct/${categoryId}`)
  }

  return (
    <React.Fragment>
          <div className='randomproducts'>
            <div className='container'>
              <div className='randomproducts__name'>
                <h4>
                  {category.name} قائمة أدوات
                  <i className='fas fa-chevron-left'></i>
                </h4>
                <p
                  className='seeall'
                  onClick={() => previewProducts(categoryId)}
                >
                  عرض الكل
                </p>
              </div>
              <div className='randomproducts__card'>
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
    getProductsByCategory: categoryId =>
      dispatch(getProductsByCategory(categoryId)),
    getCategoryById: categoryId => dispatch(getCategoryById(categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomProducts)
