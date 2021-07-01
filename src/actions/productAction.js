import axios from "axios";

import URI from "../apis/URI";
import {
  SET_LOADING,
  GET_PRODUCTS,
  GET_SOME_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCTS_BY_CATEGORIES,
  GET_PRODUCT_BY_ID,
  ADD_PRODUCT,
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BY_CATEGORIES_ERROR,
  GET_PRODUCT_BY_ID_ERROR,
} from "./types";

import { setAlert } from "./alert";

//SET_LOADING
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

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

// add product
export const addProduct =
  (image, name, price, code, description, categoryId) => async (dispatch) => {
    const newProduct = {
      name: name,
      price: price,
      code: code,
      description: description,
      categoryId: categoryId,
    };
    console.log(newProduct);
    try {
      const res = await axios.post(`${URI}/api/product/addproduct`, newProduct);
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });

      // image
      const formData = new FormData();
      formData.append("productImage", image, image.name);
      axios.post(`${URI}/api/product/productImg/${res.data._id}`, formData);
      dispatch(setAlert("Product added successfully", "success"));
    } catch (error) {
      console.log(error);
      dispatch(setAlert("Product adding failed", "error"));
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
