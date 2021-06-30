import React from 'react'
import { connect } from 'react-redux'

import Nabvar from '../shared/navbar'
import Footer from '../shared/footer'
import Header from '../categories/header'
import CategoryAccordion from '../categories/accordion'
import Loading from '../shared/loading'

// import { setLoading } from '../../actions'

const Categories = (props) => {
  const { loading } = props
console.log(loading)
  return (
    <React.Fragment>
      {/* {loading ? (
        <Loading></Loading>
      ) : ( */}
        <div className='allproduct'>
          <Nabvar></Nabvar>
          <Header></Header>
          <CategoryAccordion></CategoryAccordion>
          <Footer></Footer>
        </div>
      {/* )} */}
    </React.Fragment>
  )
}

// mapStateToProps
const mapStateToProps = state => {

  return {
    loading: state.categoryReducer.loading
  }
}

// mapDispatchToProps
// const mapDispatchToProps = dispatch => {
//   return {
//     setLoading: dispatch(setLoading())
//   }
// }

export default connect(mapStateToProps,null)(Categories)
