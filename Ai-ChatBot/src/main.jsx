import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";
import ContextProvider from './context/Context'; // Import the ContextProvider

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>  {/* Wrap App with ContextProvider */}
      <App />
    </ContextProvider>
  </React.StrictMode>
);

// comment from main branch
// comment for Feature branch

