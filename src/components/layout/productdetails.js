import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import Nabvar from '../shared/navbar'
import Footer from '../shared/footer'
import Header from '../productdetails/header'
import ProductDetailsData from '../productdetails/productdetialsdata'
import RandomProducts from '../home/randomproducts'

import { getProductById, getCategoryById } from '../../actions'

const ProductDetails = props => {
  const { product, category, getProductById, getCategoryById } = props

  const categoryId = product?.categoryId._id
  const { id } = useParams()

  useEffect(() => {
    getProductById(id)
    getCategoryById(categoryId)
  }, [getProductById, getCategoryById, id, categoryId])

  return (
    <React.Fragment>
      <div className='productdetails'>
        <Nabvar></Nabvar>
        <Header categoryName={category?.name} categoryId={categoryId}></Header>
        <ProductDetailsData product={product}></ProductDetailsData>
        <RandomProducts categoryId={categoryId}></RandomProducts>
        <Footer></Footer>
      </div>
    </React.Fragment>
  )
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    product: state.productReducer.product,
    category: state.categoryReducer.category
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    getCategoryById: id => dispatch(getCategoryById(id)),
    getProductById: id => dispatch(getProductById(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)
