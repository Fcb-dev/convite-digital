import React, { useEffect, useRef, useState } from 'react';
import './AudioPlayer.css';

export default function AudioPlayer({ triggerPlay }) {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // Play the audio when triggerPlay becomes true (user clicked "Open Invitation")
  useEffect(() => {
    if (triggerPlay && audioRef.current) {
      audioRef.current.play()
        .then(() => {
          console.log("Audio playing successfully.");
        })
        .catch(err => {
          console.log("Autoplay blocked or audio failed:", err);
        });
    }
  }, [triggerPlay]);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.muted = false;
        audioRef.current.play().catch(err => console.log(err));
      } else {
        audioRef.current.muted = true;
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="audio-player-wrapper">
      {/* Hidden native audio tag */}
      <audio
        ref={audioRef}
        src={`/assets/audio/background_music.mp3?v=${Date.now()}`}
        loop
        preload="auto"
      />

      {/* Floating control button */}
      {triggerPlay && (
        <button 
          id="toggle-audio-btn"
          className={`audio-btn ${isMuted ? 'audio-muted' : 'audio-playing'}`}
          onClick={toggleMute}
          aria-label={isMuted ? "Ativar música de fundo" : "Mutar música de fundo"}
        >
          {/* Animated sound bars */}
          {!isMuted && (
            <div className="sound-waves">
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
              <span className="wave-bar"></span>
            </div>
          )}

          {/* SVG Speaker Icon */}
          <div className="speaker-icon-wrapper">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="speaker-icon"
            >
              {isMuted ? (
                // Speaker Muted Icon
                <>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </>
              ) : (
                // Speaker Playing Icon
                <>
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </>
              )}
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}
