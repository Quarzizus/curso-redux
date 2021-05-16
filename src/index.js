import React from "react";
import ReactDOM from "react-dom";
import App from "./routes/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reduxThunk from "redux-thunk";
import Reducers from "./reducers/index";

const store = createStore(
  //reducers
  Reducers,
  //initial state,
  {},
  //reduxThunk
  applyMiddleware(reduxThunk)
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("App")
);
