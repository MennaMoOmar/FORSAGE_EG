import React from 'react'

import URI from '../../apis/URI';

const Header = ({ categoryName, categoryId }) => {

  return (
    <React.Fragment>
      <div className='productdetailsheader container'>
        <h4>
          {categoryName} قائمة أدوات <i class='fas fa-chevron-left'></i>
        </h4>
        <img
          src={URI + '/api/category/categoryImg/' + categoryId}
          alt='category'
        />
      </div>
    </React.Fragment>
  )
}

export default Header
