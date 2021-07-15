import {
  SET_LOADING,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_SOME_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCT_BY_ID,
  ADD_PRODUCT,
  DELETE_PRODUCT_BY_ID,
  EDIT_PRODUCT,
  GET_PRODUCT_BY_CODE,
  GET_PRODUCT_BY_CODE_ERROR,
  RESET_ALL_PRODUCTS,
  RESET_SOME_PRODUCTS
} from '../actions/types'

const initialState = {
  someProducts: [],
  products: [],
  product: null,
  loading: false,
  searchproduct: null
}

const product = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case RESET_SOME_PRODUCTS: {
      return {
        ...state,
        someProducts: []
      }
    }

    case RESET_ALL_PRODUCTS: {
      return {
        ...state,
        products: []
      }
    }

    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
        searchproduct: null
      }

    case GET_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        products: payload,
        searchproduct: null
      }

    case GET_SOME_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        someProducts: payload,
        searchproduct: null
      }

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload,
        searchproduct: null
      }

    case GET_PRODUCT_BY_CODE:
      return {
        ...state,
        searchproduct: payload
      }
    case GET_PRODUCT_BY_CODE_ERROR:
      return {
        ...state,
        searchproduct: null
      }

    case ADD_PRODUCT:
      return {
        ...state,
        products: [payload, ...state.products],
        loading: false,
        searchproduct: null
      }
    case DELETE_PRODUCT_BY_ID:
      return {
        ...state,
        products: state.products.filter(product => product._id !== payload),
        searchproduct: null
      }
    case EDIT_PRODUCT: {
      return {
        ...state,
        searchproduct: null
      }
    }

    default:
      return state
  }
}

export default product
