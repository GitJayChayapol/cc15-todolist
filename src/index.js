// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./app/App";
import TodoContextProvider from "./context/todoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
