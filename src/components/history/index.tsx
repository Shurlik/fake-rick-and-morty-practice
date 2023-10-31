import * as React from 'react'
import {useAppDispatch, useAppSelector} from "../../hooks/useAppStore";
import Box from "@mui/material/Box";
import {Button, Container} from '@mui/material'
import styles from './history.module.css'
import HistoryElem from './history-elem'
import {setShowHistory} from "../../store/data/data.slices";

const History = () => {
  const {history, showHistory} = useAppSelector(state => state.data)
  const dispatch = useAppDispatch()

  const closeHandler = () => {
    dispatch(setShowHistory(false))
  }

  if (!showHistory) {
    return null
  }

  return (
    <Container className={styles.wrapper}>
      <Button
        size={'large'}
        variant="contained"
        onClick={closeHandler}
      >CLOSE</Button>
      <Box borderTop={'1px solid grey'} borderBottom={'1px solid grey'} marginTop={5}>
        {history.map(h => <HistoryElem
          key={h}
          elem={h}
        />)}
      </Box>
    </Container>
  );
};

export default History;
