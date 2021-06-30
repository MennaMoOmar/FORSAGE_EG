import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "../actions/types";

const initialState = {
  token: localStorage.getItem("token"),
  isLogged: null,
};

const Auth = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      return {
        isLogged: true,
        token: payload.token,
      };
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        isLogged: false,
        token: null,
      };

    default:
      return state;
  }
};

export default Auth;
