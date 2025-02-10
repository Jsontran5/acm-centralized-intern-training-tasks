import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BlogProvider } from "./BlogContext.tsx"; 
import reportWebVitals from "./reportWebVitals.js";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </React.StrictMode>
);

reportWebVitals();
