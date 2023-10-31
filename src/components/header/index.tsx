import * as React from 'react';
import styles from './header.module.css'
import Box from "@mui/material/Box";
import {Link, useNavigate} from "react-router-dom";
import RickMortyBig from "../svg-components/RickMortyBig";
import RickMorty from "../svg-components/RickMorty";
import {setShowHistory} from "../../store/data/data.slices";
import {useAppDispatch} from "../../hooks/useAppStore";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch()

  const hideHistory = () => dispatch(setShowHistory(false))

  const navigateHomeHandler = () => {
    navigate('/')

    hideHistory()
  }

  return (
    <Box
      className={styles.container}
      margin={'auto'}
      alignItems={'center'}
      display={'flex'}
      justifyContent={'center'}
    >
      <h1
        onClick={navigateHomeHandler}
        className={styles.title}
      >The Rick and Morty API</h1>
      <Box
        position={'absolute'}
        bottom={-5}
      >
        <RickMortyBig/>
      </Box>
      <Box
        position={'absolute'}
        top={10}
        left={15}
      >
        <Link
          to={'/'}
          onClick={hideHistory}
        >
          <RickMorty/>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
