import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Preload critical fonts for faster FCP
const preloadFonts = () => {
  const fontLink = document.createElement("link");
  fontLink.rel = "preload";
  fontLink.as = "font";
  fontLink.type = "font/woff2";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap";
  fontLink.crossOrigin = "anonymous";
  document.head.appendChild(fontLink);
};
preloadFonts();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);