import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers"; /*2차*/

const store = createStore(
  rootReducer,
  applyMiddleware(promiseMiddleware, ReduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);