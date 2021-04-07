import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./redux/store";
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>;
<link rel="preconnect" href="https://fonts.gstatic.com"></link>;
<link
  href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap"
  rel="stylesheet"
></link>;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
