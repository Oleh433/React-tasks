import React from 'react';

const FullscreenModal = ({ color, onClose }) => {
  return (
    <div className="fullscreen" style={{ backgroundColor: color }} onClick={onClose}>
      <div className="fullscreen-content">
        <span className="color-code">{color}</span>
      </div>
    </div>
  );
};

export default FullscreenModal;
