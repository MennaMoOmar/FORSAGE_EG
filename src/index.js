import React from "react";
import ReactDOM from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import thunk from "redux-thunk";
// import { Router } from "react-router";

import App from "./components/App";

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";

// ///// Reduc dev tools
// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(
//   reducers,
//   {},
//   composeWithDevTools(applyMiddleware(thunk))
// );

// const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <App />,

  document.querySelector("#root")
);
