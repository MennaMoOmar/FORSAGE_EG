import {
  SET_LOADING,
  GET_ALL_CATEGORIES,
  GET_SOME_CATEGORIES,
  GET_CATEGORY_BY_ID,
  ADD_CATEGORY
} from '../actions/types'

const initialState = {
  categories: [],
  category: {},
  loading: false
}

const category = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }

    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false
      }

    case GET_SOME_CATEGORIES:
      return {
        ...state,
        categories: payload,
        loading: false
      }

    case GET_CATEGORY_BY_ID:
      return {
        ...state,
        category: payload,
        loading: false
      }

    case ADD_CATEGORY:
      return {
        // ...state,
        // categories: [payload, ...state.categories],
        loading: false
      }

    default:
      return state
  }
}

export default category
