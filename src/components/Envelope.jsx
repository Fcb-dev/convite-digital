import React, { useState } from 'react';
import './Envelope.css';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Delay triggering onOpen to allow the opening transition animation to complete
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div className={`envelope-container ${isOpen ? 'envelope-opened' : ''}`}>
      <div className="envelope-card shadow-book">
        {/* Decorative corner leaves */}
        <div className="corner-decor top-left"></div>
        <div className="corner-decor top-right"></div>
        <div className="corner-decor bottom-left"></div>
        <div className="corner-decor bottom-right"></div>

        <div className="envelope-content">
          <div className="wedding-header">
            <span className="subtitle">Você recebeu um convite</span>
            <span className="divider-line"></span>
          </div>

          <h1 className="couple-names">Yasmin & Felipe</h1>
          
          <p className="wedding-date">06 . SETEMBRO . 2026</p>

          <button 
            id="open-invite-btn"
            className="open-btn" 
            onClick={handleOpen}
            aria-label="Abrir convite de casamento"
          >
            <div className="wax-seal-wrapper">
              <div className="wax-seal">
                <img src="/assets/images/logo_1.png" alt="Y&F Logo" className="seal-logo" />
              </div>
              <div className="pulse-ring"></div>
            </div>
            <span className="btn-label">Tocar para Abrir</span>
          </button>
        </div>
      </div>
    </div>
  );
}
