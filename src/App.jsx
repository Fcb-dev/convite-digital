import React, { useState } from 'react';
import Envelope from './components/Envelope';
import AudioPlayer from './components/AudioPlayer';
import Book from './components/Book';
import Page from './components/Page';
import './components/PagesContent.css';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  return (
    <>
      {/* 1. Entry Envelope Overlay Screen */}
      <Envelope onOpen={() => setIsEnvelopeOpen(true)} />

      {/* 2. Floating Background Audio Player */}
      <AudioPlayer triggerPlay={isEnvelopeOpen} />

      {/* 3. Main Book Structure */}
      {isEnvelopeOpen && (
        <Book>
          {/* PAGE 1: COVER */}
          <Page>
            <div className="cover-page">
              <h1 className="cover-title">Yasmin & Felipe</h1>
              <p className="cover-subtitle">Nosso Casamento</p>
            </div>
          </Page>

          {/* PAGE 2: OFFICIAL INVITATION CARD */}
          <Page>
            <div className="invitation-card-page-new">
              {/* No text or child images, just the background image floral_3.jpg */}
            </div>
          </Page>

          {/* PAGE 3: INTERACTIVE ACTIONS */}
          <Page>
            <div className="interactive-page-new">
              <div className="floating-buttons-container">
                {/* Button 1: Location */}
                <a 
                  id="btn-location"
                  href="https://www.google.com/maps/place/Espa%C3%A7o+Orizzonte/data=!4m2!3m1!1s0x0:0xc3d3ea190773f04b?sa=X&ved=1t:2428&ictx=111" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="floating-btn"
                >
                  <div className="btn-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  </div>
                  <span className="btn-label">Local do Evento</span>
                </a>

                {/* Button 2: Gifts */}
                <a 
                  id="btn-gifts"
                  href="https://sites.wedy.com/casal-felipe-e-yasmin/lista-de-presentes" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="floating-btn"
                >
                  <div className="btn-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                      <polyline points="20 12 20 22 4 22 4 12"></polyline>
                      <rect x="2" y="7" width="20" height="5"></rect>
                      <line x1="12" y1="22" x2="12" y2="7"></line>
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
                    </svg>
                  </div>
                  <span className="btn-label">Lista de Presente</span>
                </a>

                {/* Button 3: RSVP */}
                <a 
                  id="btn-rsvp"
                  href="https://sites.wedy.com/casal-felipe-e-yasmin/confirmacao-de-presenca" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="floating-btn"
                >
                  <div className="btn-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <span className="btn-label">Confirmar Presença</span>
                </a>

                {/* Button 4: Access Site */}
                <a 
                  id="btn-site"
                  href="https://sites.wedy.com/casal-felipe-e-yasmin" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="floating-btn"
                >
                  <div className="btn-icon-wrapper">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="btn-icon">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="2" y1="12" x2="22" y2="12"></line>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                  </div>
                  <span className="btn-label">Acessar Site</span>
                </a>
              </div>
            </div>
          </Page>

          {/* PAGE 4: BACK COVER */}
          <Page>
            <div className="back-cover-page-new">
              <h2 className="back-cover-message">Esperamos vocês</h2>
            </div>
          </Page>
        </Book>
      )}
    </>
  );
}
