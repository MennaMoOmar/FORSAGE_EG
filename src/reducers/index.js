import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import alert from "./alert";

export default combineReducers({
  categoryReducer: categoryReducer,
  productReducer: productReducer,
  userReducer: userReducer,
  alert: alert,
});
