import * as React from 'react';
import {useEffect, useState} from 'react';
import {Box, Fab} from "@mui/material";
import {ErrorOutline, MoreVert, SaveAlt} from '@mui/icons-material';
import styles from './fab.module.css'
import {useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppStore";
import {CSVLink} from "react-csv";
import {CsvType} from "../../types";
import {setShowHistory} from "../../store/data/data.slices";


const FabIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {data} = useAppSelector(state => state.data)
  const [csvData, setCsvData] = useState<CsvType[]>([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    const csv = data.map(item => {
      return {
        id: item.id,
        name: item.name,
        location: item.location.name,
        status: item.status,
        origin: item.origin.name,
        image: item.image,
        species: item.species
      }
    })
    setCsvData(csv)

  }, [data])


  const location = useLocation()

  const isDisabled = location.pathname !== '/'


  const getCsvHandler = () => {
    setIsOpen(false)
  }

  const historyHandler = () => {
    dispatch(setShowHistory(true))
    setIsOpen(false)

  }


  return (
    <Box
      className={styles.wrapper}
    >
      <Box
        className={`${isOpen ? styles.opened : styles.hidden}`}
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <CSVLink
          data={csvData}
          filename={'Characters.csv'}
          onClick={() => {
            if (isDisabled) {
              setIsOpen(false)

              return false; // 👍🏻 You are stopping the handling of component
            }
            console.log("Getting CSV");
          }}
        >
          <Fab
            size={'small'}
            aria-label="edit"
            onClick={getCsvHandler}
            disabled={isDisabled}
          >
            <SaveAlt/>
          </Fab>
        </CSVLink>
        <Fab
          size={'small'}
          aria-label="edit"
          onClick={historyHandler}
        >
          <ErrorOutline/>
        </Fab>
      </Box>
      <Fab
        size={'medium'}
        aria-label="edit"
        onClick={() => setIsOpen(!isOpen)}
      >
        <MoreVert/>
      </Fab>
    </Box>
  );
};

export default FabIcon;
