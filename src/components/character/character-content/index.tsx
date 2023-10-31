import * as React from 'react';
import styles from './character-content.module.css'

interface CharacterContentProps {
  title: string;
  text: string;
}

const CharacterContent:  React.FC<CharacterContentProps>  = ({title, text}) => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.title}>{title}</p>
      <p className={styles.text}>{text}</p>
    </section>
  );
};

export default CharacterContent;
