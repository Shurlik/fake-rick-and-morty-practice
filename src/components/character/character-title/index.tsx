import React from 'react'
import styles from './character-title.module.css'
import {Link} from "@mui/material";

interface CTitleProps {
  name: string;
  status: 'Dead' | 'Alive' | 'unknown';
  species: string;
  id?: number | string
}

export const CharacterTitle: React.FC<CTitleProps> = ({name, status, species, id}) => {
  const titleElement = id ? <Link href={`/character/${id}`}>{name}</Link> : <h2>{name}</h2>

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
