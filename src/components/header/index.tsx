import React from 'react';
import styles from './header.module.css'
import Box from "@mui/material/Box";
import {Link} from "@mui/material";
import RickMortyBig from "../svg-components/RickMortyBig";
import RickMorty from "../svg-components/RickMorty";
import {useHistory} from "../../hooks/useHistory";

const Header = () => {
  const {saveToHistory} = useHistory()
  const testHandler = () => {
    saveToHistory('123')
  }

  return (
    <Box
      className={styles.container}
      margin={'auto'}
      alignItems={'center'}
      display={'flex'}
      justifyContent={'center'}
    >
      <h1 onClick={testHandler} className={styles.title}>The Rick and Morty API</h1>
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
        <Link href={'/'}>
          <RickMorty/>
        </Link>
      </Box>
    </Box>
  );
};

export default Header;
