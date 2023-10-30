import React from 'react';
import {CharacterType} from "../../../types";
import {CharacterTitle} from "../character-title";
import CharacterContent from "../character-content";
import styles from './character-elem.module.css'
import {Grid} from "@mui/material";

const CharacterElem: React.FC<CharacterType> = ({id, name, species, status, image, origin, location}) => {
  const locationTitle = 'Last known location:'
  const originTitle = 'First seen in:'

  return (
    <Grid
      sm={12}
      md={6}
      item
    >
      <div className={styles.wrapper}>
      <div className={styles.image}>
        <img
          alt={'char image'}
          src={image}
        />
      </div>
      <div className={styles.content}>
        <CharacterTitle {...{name, status, species, id}} />
        <CharacterContent
          title={locationTitle}
          text={location.name}
        />
        <CharacterContent
          title={originTitle}
          text={origin.name}
        />
      </div>
      </div>
    </Grid>
  );
};

export default CharacterElem
