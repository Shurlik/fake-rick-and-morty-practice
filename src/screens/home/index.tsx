import React, {useState} from "react";
import CharactersGrid from "../../components/characters-grid"
import styles from "./home.module.css"
import {Container, Pagination} from "@mui/material";
import {useQuery} from "@apollo/client";
import {charactersQuery} from "../../services/get-data";
import {CharacterType} from "../../types";


const Home: React.FC<{}> = props => {
  const [currentPage, setCurrentPage] = useState(1)
  const {data, loading, error} = useQuery(charactersQuery, {variables: {page: currentPage}})

  const characters: CharacterType[] = data?.characters?.results;

  const stepHandler = (_: any, value: number) => {
    setCurrentPage(value)
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  return (
    <Container className={styles.wrapper}>
      <CharactersGrid {...{characters, loading}}/>
      <div
        className={styles.pagination}
      >
        <Pagination
          count={data?.characters?.info.pages}
          variant="outlined"
          shape="rounded"
          color={'standard'}
          showFirstButton
          showLastButton
          siblingCount={1}
          onChange={stepHandler}
        />
      </div>
    </Container>
  );
};

export default Home
