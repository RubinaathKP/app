import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import styles from './Header.module.css';

function Header() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <Confetti
        width={windowSize.width}
        height={windowSize.height}
        numberOfPieces={120}
        recycle={true}
        colors={['#FADADD', '#E6E6FA', '#FFFDD0', '#B0E0E6', '#F0E68C']}
      />

      <div className={styles.banner}>
        <div className={styles.flourishLeft} aria-hidden="true">🌸</div>
        <h1 className={styles.title}>
          Joyeux Anniversaire, Sai Nandhita
          <span className={styles.englishSubheading}>Happy Birthday Sai Nandhita</span>
        </h1>
        <div className={styles.flourishRight} aria-hidden="true">🌸</div>
      </div>
    </header>
  );
}

export default Header;
