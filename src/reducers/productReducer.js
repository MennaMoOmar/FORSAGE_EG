import { GET_PRODUCTS, GET_PRODUCTS_BY_CATEGORIES } from "../actions/types";
const initialState = {
  products: [],
  product: null,
  randomBrandProducts: null,
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
        randomBrandProducts: payload,
      };

    default:
      return state;
  }
};

export default product;
