import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/index";
import reducer from "./redux/modules/reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
