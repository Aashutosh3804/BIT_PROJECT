import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./Store/Reducers/Reducers";
import Mycontext from "./Global/context";

ReactDOM.render(
  //<Provider store={createStore(reducer, applyMiddleware(thunk))}>
  <App />,
  //</Provider>
  document.getElementById("root")
);
