import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from './loader.module.css'

const Loader = () => {
  return (
    <section className={styles.loader}>
      <Box sx={{display: 'flex'}}>
        <CircularProgress color="inherit"/>
      </Box>
    </section>
  )
}

export default Loader;
