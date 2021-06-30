import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ADMIN_lOADED,
  ADMIN_lOADING_FAILED,
} from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isAdmin: null,
  admin: null,
};

const user = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        isLAdmin: true,
        token: payload.token,
      };
    case ADMIN_lOADED:
      return {
        ...state,
        isAdmin: true,
        admin: payload,
      };
    case LOGIN_FAIL:
    case LOGOUT:
    case ADMIN_lOADING_FAILED:
      localStorage.removeItem("token");
      return {
        isLAdmin: false,
        token: null,
      };

    default:
      return state;
  }
};

export default user;
