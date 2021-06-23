import axios from 'axios'

import URI from '../apis/URI'
import { GET_ALL_CATEGORIES, GET_CATEGORY_BY_ID } from './types'

// Get all categories
export const getAllCategories = () => async dispatch => {
  try {
    const res = await axios.get(`${URI}/api/category`);;
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}

// Get categorybyid
export const getCategoryById = (id) => async dispatch => {
  try {
    const res = await axios.get(`${URI}/api/category/${id}`);
    dispatch({
      type: GET_CATEGORY_BY_ID,
      payload: res.data
    })
  } catch (error) {
    console.log(error)
  }
}
