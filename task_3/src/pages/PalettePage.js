import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import palettes from '../data/palette.json';
import './PalettePage.css';
import clickSound from '../assets/src_notify.mp3';
import PaletteHeader from '../components/PaletteHeader';
import ColorGrid from '../components/ColorGrid';
import FullscreenModal from '../components/FullscreenModal';

const PalettePage = () => {
  const { id } = useParams();
  const palette = palettes.find((p) => p.id === id);
  const [fullscreenColor, setFullscreenColor] = useState(null);
  const [soundOn, setSoundOn] = useState(true);

  if (!palette) {
    return <div>Palette not found</div>;
  }

  const handleToggleSound = () => {
    setSoundOn((prev) => !prev);
  };

  const handleColorClick = (color) => {
    if (soundOn) {
      const audio = new Audio(clickSound);
      audio.play();
    }
    navigator.clipboard.writeText(color.color);
    setFullscreenColor(color.color);
    setTimeout(() => {
      setFullscreenColor(null);
    }, 1000);
  };

  return (
    <div className="palette-page">
      <PaletteHeader palette={palette} soundOn={soundOn} onToggleSound={handleToggleSound} />
      <ColorGrid colors={palette.colors} onColorClick={handleColorClick} />
      {fullscreenColor && (
        <FullscreenModal color={fullscreenColor} onClose={() => setFullscreenColor(null)} />
      )}
    </div>
  );
};

export default PalettePage;
