// App.js
import React from "react";
import ColorPicker from "./ColorPicker";
import "./App.css";

const App = () => {
  return (
    <div className="app-container">
      <div className="color-picker-container">
        <ColorPicker defaultColor="#ffcc00" />
      </div>
    </div>
  );
};

export default App;
