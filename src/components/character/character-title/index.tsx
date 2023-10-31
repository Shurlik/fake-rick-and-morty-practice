import * as React from 'react'
import { Link } from 'react-router-dom';
import styles from './character-title.module.css'

interface CTitleProps {
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  id?: number | string;
  historyHandler?: () => void
}

export const CharacterTitle: React.FC<CTitleProps> = ({name, status, species, id, historyHandler}) => {

  const titleElement = id ? <Link
    to={`/character/${id}`}
    onClick={historyHandler}
  >{name}</Link> : <h2>{name}</h2>

  return (
    <section className={styles.wrapper}>
      {titleElement}
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
