import {
  SET_LOADING,
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_SOME_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCT_BY_ID,
  ADD_PRODUCT,
  DELETE_PRODUCT_BY_ID,
  EDIT_PRODUCT,
} from "../actions/types";

const initialState = {
  products: [],
  product: null,
  loading: false,
};

const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    case GET_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        products: payload,
      };

    case GET_SOME_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        products: payload,
      };

    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload,
      };

    case ADD_PRODUCT:
      return {
        ...state,
        products: [payload, ...state.products],
        loading: false,
      };
    case DELETE_PRODUCT_BY_ID:
      return {
        ...state,
        products: state.products.filter((product) => product._id !== payload),
      };
    case EDIT_PRODUCT: {
      return {
        ...state,
      };
    }

    default:
      return state;
  }
};

export default product;
