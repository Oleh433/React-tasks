import React from 'react';
import { useNavigate } from 'react-router-dom';
import palettes from '../data/palette.json';
import Palette from '../components/Palette';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const handlePaletteClick = (paletteId) => {
    navigate(`/palette/${paletteId}`);
  };

  return (
    <div className="home-page">
      <Header />
      <div className='palette-grid'>
      {palettes.map(palette => (
        <div key={palette.id} onClick={() => handlePaletteClick(palette.id)}>
          <Palette paletteId={palette.id} />
        </div>
      ))}
      </div>
    </div>
  );
};

export default HomePage;
