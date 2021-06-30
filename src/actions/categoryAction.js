import axios from "axios";

import URI from "../apis/URI";
import {
  SET_LOADING,
  GET_ALL_CATEGORIES,
  GET_SOME_CATEGORIES,
  GET_CATEGORY_BY_ID,
  ADD_CATEGORY,
} from "./types";

// import { setAlert } from "./alert";
//SET_LOADING
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

// Get all categories
export const getAllCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/api/category`);
    console.log("action",res.data)
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get some categories
export const getSomeCategories = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/api/category/slicecategories`);
    dispatch({
      type: GET_SOME_CATEGORIES,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// Get categorybyid
export const getCategoryById = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/api/category/${id}`);
    dispatch({
      type: GET_CATEGORY_BY_ID,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

// add category
export const addCategory = (image, name) => async (dispatch) => {
  const newCategory = {
    name: name,
  };

  try {
    const res = await axios.post(
      `${URI}/api/category/addcategory/`,
      newCategory
    );
    dispatch({
      type: ADD_CATEGORY,
      payload: res.data,
    });

    // image
    const formData = new FormData();
    formData.append("categoryImage", image, image.name);
    axios.post(`${URI}/api/category/categoryImg/${res.data._id}`, formData);
  } catch (error) {
    console.log(error);
  }
};
