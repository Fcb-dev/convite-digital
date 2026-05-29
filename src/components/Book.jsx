import React, { useState, useEffect } from 'react';
import Page from './Page';
import './Book.css';

export default function Book({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [transitioningIndex, setTransitioningIndex] = useState(null);
  
  // Swipe detection coordinates
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const totalPages = React.Children.count(children);

  const nextPage = () => {
    if (currentIndex < totalPages - 1 && transitioningIndex === null) {
      setTransitioningIndex(currentIndex);
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentIndex > 0 && transitioningIndex === null) {
      setTransitioningIndex(currentIndex - 1);
      setCurrentIndex(prev => prev - 1);
    }
  };

  // Clear transitioning state after CSS transition finishes (900ms)
  useEffect(() => {
    if (transitioningIndex !== null) {
      const timer = setTimeout(() => {
        setTransitioningIndex(null);
      }, 900);
      return () => clearTimeout(timer);
    }
  }, [transitioningIndex]);

  // Touch handlers for swipe guestures on mobile
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (transitioningIndex !== null) return;
    const swipeThreshold = 50; // px
    if (touchStart - touchEnd > swipeThreshold && touchEnd !== 0) {
      // Swiped Left -> Next page
      nextPage();
    } else if (touchEnd - touchStart > swipeThreshold && touchEnd !== 0) {
      // Swiped Right -> Previous page
      prevPage();
    }
    // Reset coordinates
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, transitioningIndex]);

  return (
    <div className="book-viewport">
      {/* Book container */}
      <div 
        className="book-container shadow-book"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Render pages */}
        {React.Children.map(children, (child, idx) => {
          const isFlipped = idx < currentIndex;
          const isTransitioning = idx === transitioningIndex;

          // Calculate Z-Index dynamically to maintain realistic 3D stacking
          let zIndex = totalPages;
          if (isFlipped) {
            zIndex = idx;
          } else if (idx === currentIndex) {
            zIndex = totalPages + 1; // Current page is always on top
          } else {
            zIndex = totalPages - idx;
          }

          return React.cloneElement(child, {
            number: idx,
            isFlipped,
            isTransitioning,
            zIndex
          });
        })}

        {/* Bottom Corner Flip Controls (Hotspots) */}
        {/* Right Corner (Next) - Hidden on last page */}
        {currentIndex < totalPages - 1 && (
          <button 
            className="flip-hotspot hotspot-right"
            onClick={nextPage}
            aria-label="Próxima página"
          >
            <div className="corner-curl curl-right"></div>
          </button>
        )}

        {/* Left Corner (Prev) - Hidden on first page */}
        {currentIndex > 0 && (
          <button 
            className="flip-hotspot hotspot-left"
            onClick={prevPage}
            aria-label="Página anterior"
          >
            <div className="corner-curl curl-left"></div>
          </button>
        )}
      </div>

      {/* Floating page indicator at the bottom */}
      <div className="page-indicator">
        Página {currentIndex + 1} de {totalPages}
      </div>
    </div>
  );
}
