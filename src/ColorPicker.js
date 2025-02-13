import React, { useState, useEffect } from 'react';
import './App.css';

const ColorPicker = ({ defaultColor }) => {
  const [selectedColor, setSelectedColor] = useState(defaultColor);

  useEffect(() => {
    document.body.style.backgroundColor = selectedColor;
  }, [selectedColor]);

  const colors = [
    '#ff0000', // red
    '#00ff00', // green
    '#0000ff', // blue
    '#ffff00', // yellow
    '#ff00ff', // pink
    '#00ffff', // cyan
  ];

  return (
    <div className="color-picker">
      <h2 className="gradient-text">Select a Background Color</h2>
      <div className="color-display" style={{ backgroundColor: selectedColor }}>
        <p>Current color: {selectedColor}</p>
      </div>
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color}
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPicker;
