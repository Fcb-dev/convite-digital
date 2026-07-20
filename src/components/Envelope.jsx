import { useState } from 'react';
import './Envelope.css';

export default function Envelope({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    if (isOpen) return;

    setIsOpen(true);

    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleOpen();
    }
  };

  return (
    <div className={`envelope-container ${isOpen ? 'envelope-opened' : ''}`}>
      <div
        className="envelope-card shadow-book"
        onClick={handleOpen}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={isOpen ? -1 : 0}
        aria-label="Abrir e folhear convite de casamento"
      >
        <img
          className="entrance-photo"
          src="/assets/images/pre-wedding-114.jpg"
          alt="Yasmin e Felipe"
        />

        <div className="envelope-content">
          <h1 className="couple-names">Yasmin & Felipe</h1>
          <p className="wedding-date">06 . SETEMBRO . 2026</p>
        </div>

        <div className="page-corner-fold" aria-hidden="true">
          <div className="turn-hint">
            <span>Folheie</span>
            <span className="turn-hint-arrow">›</span>
          </div>
        </div>
      </div>
    </div>
  );
}
