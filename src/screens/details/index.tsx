import React from "react";
import {Navigate, useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {characterDetailQuery} from "../../services/get-data";
import Loader from "../../components/loader";
import {CharacterBigElem} from "../../components/character/character-big-elem";
import {Container} from "@mui/material";

const Details = () => {
  const {id} = useParams();

  if (!id || isNaN(+id)) {
    return <Navigate
      to="/"
      replace
    />
  }

  const {data, loading, error} = useQuery(characterDetailQuery, {variables: {id: +id}})
  if (loading) {
    return <Loader/>
  }

  const character = data.character


  return (
    <Container>
      <CharacterBigElem {...{character}}/>
    </Container>
  );
};

export default Details;
