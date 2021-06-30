import axios from "axios";
import URI from "../apis/URI";
import { setAlert } from "./alert";

import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from "./types";

export const login =
  ({ name, password }) =>
  async (dispatch) => {
    const body = { name, password };
    try {
      const res = await axios.post(`${URI}/api/user/login`, body);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      console.log(res.data);
      dispatch(setAlert("Admin logged in successfully", "success"));
    } catch (error) {
      //   console.log(error);
      dispatch({
        type: LOGIN_FAIL,
      });
      dispatch(setAlert("invalid email or password", "error"));
    }
  };

//logout
export const logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch(setAlert("Logged out successfully", "success"));
};
