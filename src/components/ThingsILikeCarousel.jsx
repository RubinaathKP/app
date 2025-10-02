import React, { useState } from 'react';
import styles from './ThingsILikeCarousel.module.css';
import calm from './calm.png';
import smile from './smile.png';
import french from './french.png';
import chat from './chat.png';

const cardsData = [
  {
    title: "Votre calme",
    subtitle: "Your Calmness",
    description: "You are the Calmness in the Storm, a serene presence that soothes and inspires.",
    imgSrc: calm,
    imgAlt: "Calmness in the Storm",
  },
  {
    title: "Ta Grâce Française",
    subtitle: "Your French Grace",
    description: "Your elegance and charm are as timeless as the streets of Paris.",
    imgSrc: french,
    imgAlt: "French Grace",
  },
  {
    title: "Ton Sourire Radieux",
    subtitle: "Your Radiant Smile",
    description: "Your smile lights up every room and warms every heart.",
    imgSrc: smile,
    imgAlt: "Radiant Smile",
  },
  {
    title: "Vos discussions",
    subtitle: "Your Chats",
    description: "Your chatty nature brings joy and laughter to those around you especially me.",
    imgSrc: chat,
    imgAlt: "Kindness",
  },
];

function ThingsILikeCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevCard = () => {
    setActiveIndex((prev) => (prev - 1 + cardsData.length) % cardsData.length);
  };

  const nextCard = () => {
    setActiveIndex((prev) => (prev + 1) % cardsData.length);
  };

  return (
    <section className={styles.section} aria-label="Pourquoi Tu Es Extraordinaire">
      <h2 className={styles.title}>
        Pourquoi Tu Es Extraordinaire
        <span className={styles.subtitle}>Why You Are Extraordinary</span>
      </h2>

      <div className={styles.carousel}>
        <button
          aria-label="Previous card"
          onClick={prevCard}
          className={`${styles.navButton} ${styles.prevButton}`}
        >&#10094;</button>

        {cardsData.map((card, idx) => (
          <article
            key={idx}
            className={`${styles.card} ${idx === activeIndex ? styles.active : styles.inactive}`}
            aria-hidden={idx !== activeIndex}
            tabIndex={idx === activeIndex ? 0 : -1}
          >
            <div className={styles.imageWrapper}>
              <img src={card.imgSrc} alt={card.imgAlt} className={styles.image} loading="lazy" />
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <h4 className={styles.cardSubtitle}>{card.subtitle}</h4>
              <p className={styles.cardDescription}>{card.description}</p>
            </div>
          </article>
        ))}

        <button
          aria-label="Next card"
          onClick={nextCard}
          className={`${styles.navButton} ${styles.nextButton}`}
        >&#10095;</button>
      </div>
    </section>
  );
}

export default ThingsILikeCarousel;
