import React from 'react'
import { connect } from 'react-redux'

import { addCategory } from '../../actions'

const AddCategoryForm = props => {
  const { addCategory } = props

  const submitHandler = e => {
    e.preventDefault()
    const image = e.target[0].files[0]
    const name = e.target[1].value
    addCategory(image, name)
  }

  return (
    <>
      <div className='addcategoryform'>
        <div className='container'>
          <form
            className='addcategoryform__form'
            onSubmit={e => submitHandler(e)}
          >
            <div className='row'>
              <div className='col-lg-12'>
                <input
                  type='file'
                  id='file'
                  className='imageUpload'
                  name='file'
                  accept='.png, .jpg'
                  required
                />
                <input
                  className='addcategoryform__form__input input is-link'
                  type='text'
                  placeholder='Name'
                  id='name'
                  name='name'
                  required
                />
              </div>
            </div>
            <button className='addcategoryform__form__btn--save  button is-rounded'>
              Add
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

// mapStateToProps
const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    addCategory: (image, name) => dispatch(addCategory(image, name))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddCategoryForm)
