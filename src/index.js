import React from "react";
import ReactDOM from "react-dom/client"; // Updated import for React 18+
import App from "./App";
import "./index.css";

// Use ReactDOM.createRoot instead of render in React 18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
