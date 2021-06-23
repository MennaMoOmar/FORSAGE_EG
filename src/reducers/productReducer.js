import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCT_BY_ID,
} from "../actions/types";
const initialState = {
  products: [],
  product: null,
  categoryProducts: null,
};

const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };
    case GET_PRODUCTS_BY_CATEGORIES:
      return {
        ...state,
        categoryProducts: payload,
      };
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        product: payload,
      };

    default:
      return state;
  }
};

export default product;
