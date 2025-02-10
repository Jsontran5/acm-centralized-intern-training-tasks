import React from "react";
import Blog from "./Blog.tsx";
import "./styles.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Blog />
    </div>
  );
};

export default App;
