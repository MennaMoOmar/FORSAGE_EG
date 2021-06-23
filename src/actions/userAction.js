// import axios from "axios";

// import URI from "../apis/URI";

// import { PRODUCT_LOADING, CLEAR_ERRORS, GET_ERRORS, ADD_ORDER, GET_ORDERS } from "./types";

// Add Order
// export const addOrder = (OrderData) => (dispatch) => {
//   dispatch(clearErrors());
//   axios
//     .post(`${URI}/api/order/addorder`, OrderData)
//     .then((res) =>
//       dispatch({
//         type: ADD_ORDER,
//         payload: res.data,
//       })
//     )
//     .catch((err) =>
//       dispatch({
//         type: GET_ERRORS,
//         payload: err.response.data,
//       })
//     );
// };

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
