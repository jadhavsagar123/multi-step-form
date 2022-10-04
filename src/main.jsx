import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import StepContext from "./StepContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StepContext>
    <App />
  </StepContext>
);
