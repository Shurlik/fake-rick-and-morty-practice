import * as React from 'react';
import {Grid} from "@mui/material";
import CharacterContent from "../character-content";
import {CharacterTitle} from "../character-title";
import {CharacterType} from "../../../types";
import styles from './character-big-item.module.css'

interface ICharacterProps {
  character: CharacterType
}

export const CharacterBigElem: React.FC<ICharacterProps> = ({character}) => {
  const locationTitle = 'Last known location:'
  const originTitle = 'First seen in:'
  const otherInformation = 'Other Info'
  const otherInformationText = 'Here we can put some additional information\n\nBut I don\'t see it in data from GraphQL api (((( Sorry ((((('

  return (
    <Grid
      container
      item
      maxWidth={1220}
      className={styles.container}
    >
      <Grid
        item
        xs={5}
      >
        <div className={styles.image}>
          <img
            src={character.image}
            alt={'main image'}
          />
        </div>
      </Grid>
      <Grid
        item
        xs={7}
      >
        <div className={styles.content}>
          <CharacterTitle
            name={character.name}
            status={character.status}
            species={character.species}
          />
          <CharacterContent
            title={locationTitle}
            text={character.location.name}
          />
          <CharacterContent
            title={originTitle}
            text={character.origin.name}
          />
          <CharacterContent
            title={otherInformation}
            text={otherInformationText}
          />
        </div>
      </Grid>
    </Grid>
  );
};
