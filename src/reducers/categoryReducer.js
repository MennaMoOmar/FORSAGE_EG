import {
    GET_ALL_CATEGORIES,
    GET_CATEGORY_BY_ID,
  } from "../actions/types";

  const initialState = {
    categories: [],
    category: {},
    loading: false
  };
  
  const category = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case GET_ALL_CATEGORIES:
        return {
          ...state,
          categories: payload,
        };
  
        case GET_CATEGORY_BY_ID:
        return {
          ...state,
          category: payload,
        };

      default:
        return state;
    }
  };
  
  export default category;