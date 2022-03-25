import { StrictMode } from "react";
import ReactDOM from "react-dom";

// Change
import App from "./App2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
