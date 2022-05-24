import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux";
import { Provider } from "react-redux";
import Global from "./style";
import { socket } from "./socket";

ReactDOM.render(
  <Provider store={store}>
    <Global />
    <App socket={socket} />
  </Provider>,
  document.getElementById("root")
);
