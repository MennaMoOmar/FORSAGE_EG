import axios from "axios";

import URI from "../apis/URI";
import {
  GET_PRODUCTS,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORIES_ERROR,
} from "./types";

// Get Products
export const getProducts = () => async (dispatch) => {
  // dispatch(setPostLoading());
  try {
    const res = await axios.get(`${URI}/api/product`);
    console.log("get Products From Brand", res.data);
    dispatch({
      type: GET_PRODUCTS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PRODUCTS_ERROR,
    });
  }
};

export const getProductsByCategory = (category) => async (dispatch) => {
  try {
    console.log(category, typeof category);
    const res = await axios.get(`${URI}/api/product/${category}`);
    console.log(res.data);
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PRODUCTS_BY_CATEGORIES_ERROR,
    });
  }
};

// // Set loading state
// export const setPostLoading = () => {
//   return {
//     type: PRODUCT_LOADING,
//   };
// };

// // Clear errors
// export const clearErrors = () => {
//   return {
//     type: CLEAR_ERRORS,
//   };
// };
