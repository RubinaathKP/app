import React from 'react';
import styles from './AnimeInterests.module.css';
import anime from './anime.png'// Adjust to the actual image path

function Anime() {
  return (
    <section className={styles.container} aria-label="Anime Interests Celebration">
      <h2 className={styles.title}>Her Anime Celebration</h2>
      <p className={styles.subtitle}>
        Celebrating with Naruto, Miraculous, and Demon Slayer!
      </p>
      <div className={styles.imageWrapper}>
        <img
          src={anime}// Adjust to the actual image path
          alt="She celebrating her birthday with Naruto, Miraculous, and Demon Slayer characters"
          className={styles.image}
          loading="lazy"
        />
      </div>
    </section>
  );
}

export default Anime;
