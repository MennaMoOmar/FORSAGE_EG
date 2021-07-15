import axios from "axios";
import URI from "../apis/URI";
import { setAlert } from "./alert";

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ADMIN_lOADED,
  ADMIN_lOADING_FAILED,
} from "./types";

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
      dispatch(setAlert("Admin logged in successfully", "success"));
    } catch (error) {
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

export const AdminLoaded = () => async (dispatch) => {
  try {
    const res = await axios.get(`${URI}/api/user/`, {
      headers: {
        authorization: localStorage.token,
      },
    });

    dispatch({
      type: ADMIN_lOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_lOADING_FAILED,
    });
  }
};
