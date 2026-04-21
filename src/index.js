import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// IMPORT CONTEXT PROVIDER
import { ActivityProvider } from "./context/ActivityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ActivityProvider>
      <App />
    </ActivityProvider>
  </React.StrictMode>
);