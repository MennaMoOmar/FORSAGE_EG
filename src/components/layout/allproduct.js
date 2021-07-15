import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import Nabvar from '../shared/navbar'
import Footer from '../shared/footer'
import Header from '../allproduct/header'
import Products from '../allproduct/products'

import {
  getProductsByCategory,
  getCategoryById,
  resetProcucts
} from '../../actions'

const AllProduct = props => {
  const {
    getProductsByCategory,
    getCategoryById,
    products,
    categoryData,
    resetProcucts
  } = props

  const { category } = useParams()

  useEffect(() => {
    resetProcucts()
    getProductsByCategory(category)
    getCategoryById(category)
  }, [resetProcucts, getProductsByCategory, getCategoryById, category])

  return (
    <React.Fragment>
      <div className='allproduct'>
        <Nabvar></Nabvar>
        <Header category={category}></Header>
        <Products
          categoryName={categoryData.name}
          products={products}
        ></Products>
        <Footer></Footer>
      </div>
    </React.Fragment>
  )
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
    categoryData: state.categoryReducer.category
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    getProductsByCategory: id => dispatch(getProductsByCategory(id)),
    getCategoryById: id => dispatch(getCategoryById(id)),
    resetProcucts: () => dispatch(resetProcucts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllProduct)
