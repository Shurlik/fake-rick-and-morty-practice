import React from 'react'
import styles from './character-title.module.css'

interface CTitleProps {
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
}

export const CharacterTitle: React.FC<CTitleProps> = ({name, status, species}) => {

  return (
    <section className={styles.wrapper}>
      <h2>{name}</h2>
      <div className={styles.content}>
        <div
          className={`${styles.status} ${styles[status.toLowerCase()]}`}
        />
        <p
          className={styles.data}
        >{`${status} - ${species}`}</p>
      </div>
    </section>
  );
};
