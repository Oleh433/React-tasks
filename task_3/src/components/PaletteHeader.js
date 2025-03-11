import React from 'react';

const PaletteHeader = ({ palette, soundOn, onToggleSound }) => {
  return (
    <header className="palette-header">
      <a href="/" className="back-button">Back</a>
      <h2 className="palette-title">
        {palette.paletteName} {palette.emoji}
      </h2>
      <button onClick={onToggleSound} className="sound-toggle-button">
        {soundOn ? 'Sound On' : 'Sound Off'}
      </button>
    </header>
  );
};

export default PaletteHeader;
