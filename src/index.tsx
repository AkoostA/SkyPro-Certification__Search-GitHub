import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import App from "./components/App/App";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles/GlobalStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
