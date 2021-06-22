import { GET_PRODUCTS } from "../actions/types";
const initialState = {
  products: [],
  product: null,
};

const product = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        products: payload,
      };

    default:
      return state;
  }
};

export default product;
