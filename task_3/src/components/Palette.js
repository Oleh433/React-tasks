import React from 'react';
import palettes from '../data/palette.json'; 
import './Palette.css';

const Palette = ({ paletteId }) => {
  const palette = palettes.find(p => p.id === paletteId);

  if (!palette) {
    return <div className="palette"><h2>Palette not found</h2></div>;
  }

  return (
    <div className="palette">
      <h3>{palette.paletteName}</h3>
      <div className="palette-emoji">{palette.emoji}</div>
      <div className="color-grid">
        {palette.colors.map((color, index) => (
          <div key={index} className="color" style={{ backgroundColor: color.color }}>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Palette;
