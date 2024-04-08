import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Router } from "@/pages";
import { store } from "./store";
import "@/app/assets/styles/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router />
    </Provider>
  </React.StrictMode>,
);
