import React from 'react'
import URI from '../../apis/URI'

const Header = props => {
  const { category } = props

  return (
    <React.Fragment>
      <div className='allproductheader'>
        <img
          src={URI + '/api/category/categoryImg/' + category}
          alt='category'
        />
      </div>
    </React.Fragment>
  )
}

export default Header
