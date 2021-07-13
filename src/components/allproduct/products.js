import React from 'react'
import { connect } from 'react-redux'

import { setLoading } from '../../actions'

import Loading from '../shared/loading'
import ProductCard from '../shared/productcard'

const Products = props => {
  const { categoryName, products } = props

  return (
    <React.Fragment>
      {products.length===0 ? (
        <Loading></Loading>
      ) : (
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
      )}
    </React.Fragment>
  )
}

// mapStateToProps
// const mapStateToProps = state => {
//   return {
//     loading: state.categoryReducer.loading
//   }
// }

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    setLoading: dispatch(setLoading())
  }
}

export default connect(null, mapDispatchToProps)(Products)
