import React, {useEffect} from "react";
import styles from './characters-grid.module.css'
import Loader from '../loader'
import {CharacterType} from "../../types";
import CharacterElem from "../character/character-elem";
import {Grid} from "@mui/material";
import {useAppDispatch} from "../../hooks/useAppStore";
import {setData} from "../../store/data/data.slices";


interface ICharacterGridProps {
  characters: CharacterType[];
  loading: boolean;
}


const CharactersGrid: React.FC<ICharacterGridProps> = ({characters, loading}) => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (characters && characters.length >= 0 && !loading) {
      dispatch(setData(characters))
    } else {
      dispatch(setData([]))
    }
  }, [characters, loading])

  if (loading) {
    return <Loader/>
  }

  return (
    <Grid
      container
      spacing={4}
      className={styles.wrapper}
    >
      {characters.map(character => <CharacterElem
        key={character.id}
        id={character.id}
        name={character.name}
        status={character.status}
        species={character.species}
        image={character.image}
        location={character.location}
        origin={character.origin}
      />)}
    </Grid>

  );
};

export default CharactersGrid
