import React from "react";
import App from "./app";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

import "./assets/stylesheets/main.css";
import { store } from "./app/store";

const root = createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
