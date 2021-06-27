import React from 'react'
import { connect } from 'react-redux'

import { addProduct } from '../../actions'

const AddProductForm = props => {

    const {addProduct} = props;

  const submitHandler = e => {
    e.preventDefault()
    const image = e.target[0].files[0]
    const name = e.target[1].value
    const price = e.target[2].value
    const code = e.target[3].value
    const description = e.target[4].value
    const categoryId = e.target[5].value
    addProduct(image, name, price, code, description, categoryId);
  }

  return (
    <>
      <div className='addproductform'>
        <div className='container'>
          <form
            className='addproductform__form'
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
                  className='addproductform__form__input input is-link'
                  type='text'
                  placeholder='Name'
                  id='name'
                  name='name'
                  required
                />
                <input
                  className='addproductform__form__input input is-link'
                  type='text'
                  placeholder='Price'
                  id='price'
                  name='price'
                  required
                />
                <input
                  className='addproductform__form__input input is-link'
                  type='text'
                  placeholder='Code'
                  id='code'
                  name='code'
                  required
                />
                <input
                  className='addproductform__form__input input is-link'
                  type='text'
                  placeholder='Description'
                  id='description'
                  name='description'
                  required
                />
                <input
                  className='addproductform__form__input input is-link'
                  type='text'
                  placeholder='CategoryId'
                  id='CategoryId'
                  name='CategoryId'
                  required
                />
              </div>
            </div>
            <button className='addproductform__form__btn--save  button is-rounded'>
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
    addProduct: (image, name, price, code, description, categoryId) =>
      dispatch(addProduct(image, name, price, code, description, categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm)
