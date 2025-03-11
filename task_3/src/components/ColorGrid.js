import React from 'react';

const ColorGrid = ({ colors, onColorClick }) => {
  return (
    <div className="color-grid">
      {colors.map((color, index) => (
        <div
          key={index}
          className="color"
          style={{ backgroundColor: color.color }}
          onClick={() => onColorClick(color)}
        >
          {color.name}
        </div>
      ))}
    </div>
  );
};

export default ColorGrid;
