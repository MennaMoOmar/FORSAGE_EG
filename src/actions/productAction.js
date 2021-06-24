import axios from "axios";

import URI from "../apis/URI";
import {
  GET_PRODUCTS,
  GET_SOME_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCT_BY_ID,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BY_CATEGORIES_ERROR,
  GET_PRODUCT_BY_ID_ERROR,
} from "./types";

// Get Products
export const getProducts = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/api/product`);
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


// getProductsByCategory
export const getProductsByCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/api/product/category/${id}`);
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

// get some Products By Category
export const getSomeProductsByCategory = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/api/product/category/slice/${id}`);
    dispatch({
      type: GET_SOME_PRODUCTS_BY_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_SOME_PRODUCTS_BY_CATEGORIES,
    });
  }
};


// getProductById
export const getProductById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/api/product/${id}`);
    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PRODUCT_BY_ID_ERROR,
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
