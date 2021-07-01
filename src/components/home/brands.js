import React, { useEffect } from 'react'
import { useHistory } from 'react-router'
import { connect } from 'react-redux'

import URI from '../../apis/URI'

import { setLoading, getSomeCategories } from '../../actions'
import Loading from '../shared/loading'


const Brands = props => {
  const { getSomeCategories, categories, loading } = props

  const history = useHistory()
  const categoriesHandler = () => {
    history.push('/categories')
  }

  useEffect(() => {
    getSomeCategories()
  }, [getSomeCategories])

  const previewProducts = id => {
    history.push(`/allproduct/${id}`)
  }

  return (
    <React.Fragment>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className='brands'>
          <div className='container'>
            <h2>الشركات</h2>
            <p className='seeall' onClick={categoriesHandler}>
              عرض الكل
            </p>
            <div className='row'>
              {categories.map(category => {
                return (
                  <div className='col-10 col-sm-5 col-md-3 brandcard' key={category._id}>
                    <img
                      src={URI + '/api/category/categoryImg/' + category._id}
                      alt='category'
                    />
                    <div className='brandcard__content'>
                      <p className='brandcard__content__name'>
                        {category.name} قائمة أدوات
                      </p>
                      <p
                        className='brandcard__content__show'
                        onClick={() => previewProducts(category._id)}
                      >
                        عرض المنتجات
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

// mapStateToProps
const mapStateToProps = state => {
  return {
    loading: state.categoryReducer.loading,
    categories: state.categoryReducer.categories
  }
}

// mapDispatchToProps
const mapDispatchToProps = dispatch => {
  return {
    setLoading: dispatch(setLoading()),
    getSomeCategories: () => dispatch(getSomeCategories())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Brands)
