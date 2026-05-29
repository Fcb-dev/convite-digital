import React from 'react';
import './Page.css';

export default function Page({ number, isFlipped, isTransitioning, zIndex, children }) {
  return (
    <div 
      className={`book-page ${isFlipped ? 'flipped' : ''} ${isTransitioning ? 'transitioning' : ''}`}
      style={{ zIndex }}
    >
      {/* Front side of the page (content) */}
      <div className="page-face page-front">
        {children}
      </div>

      {/* Back side of the page (textured paper backing) */}
      <div className="page-face page-back">
        <div className="paper-texture-backing">
          {/* Subtle logo/icon on the back of the page */}
          <div className="backing-logo">
            <img src="/assets/images/logo_1.png" alt="Y&F Logo" className="backing-logo-img" />
          </div>
        </div>
      </div>
    </div>
  );
}
