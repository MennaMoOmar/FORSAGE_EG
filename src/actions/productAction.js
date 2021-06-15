import axios from "axios";

import URI from "../apis/URI";
import { GET_PRODUCTS, PRODUCT_LOADING, CLEAR_ERRORS, } from "./types";

// Get Products
export const getProducts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`${URI}/api/product`)
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: null,
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: PRODUCT_LOADING,
  };
};

// Clear errors
export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  };
};