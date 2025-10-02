import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import styles from './Hero.module.css';

function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Floating birthday emojis with colors and animation delays
  const floatingElements = [
    { symbol: '🎈', color: '#FADADD', style: { top: '15%', left: '18%', animationDelay: '0s' } },
    { symbol: '🌟', color: '#E6E6FA', style: { top: '35%', left: '72%', animationDelay: '1.8s' } },
    { symbol: '💖', color: '#FFFDD0', style: { top: '60%', left: '28%', animationDelay: '3.3s' } },
    { symbol: '🌸', color: '#B0E0E6', style: { top: '50%', left: '85%', animationDelay: '4.7s' } },
  ];

  return (
    <section className={styles.hero} aria-label="Hero Section">
      {/* Fullscreen pastel confetti */}
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={150}
        recycle={true}
        colors={['#FADADD', '#E6E6FA', '#FFFDD0', '#B0E0E6', '#F0E68C']}
      />

      <h1 className={styles.mainMessage}>
        Bon anniversaire à mon cher ami. Passe le plus heureux des anniversaires de ta vie.﻿
        <span className={styles.subheading}>Happy Birthday To My Dear Friend. Have The Happiest Birthday of Your Life</span>
      </h1>

      <p className={styles.subtitle}>
        Celebrating you, anime dreams, and another beautiful year
      </p>

      {/* Floating animated birthday emojis */}
      {floatingElements.map(({ symbol, color, style }, idx) => (
        <span
          key={idx}
          className={styles.floatingElement}
          style={{
            color,
            ...style,
          }}
          aria-hidden="true"
        >
          {symbol}
        </span>
      ))}

      {/* Age badge */}
      <div className={styles.ageBadge} aria-label="Age">
        <span>18&nbsp;</span>
        <span>ans</span>
      </div>
    </section>
  );
}

export default Hero;
