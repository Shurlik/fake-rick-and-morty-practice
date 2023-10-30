import React, {useEffect, useState} from 'react';
import {Box, Fab} from "@mui/material";
import {ErrorOutline, MoreVert, SaveAlt} from '@mui/icons-material';
import styles from './fab.module.css'
import {useLocation} from "react-router-dom";
import {useAppSelector} from "../../hooks/useAppStore";
import {CSVLink} from "react-csv";
import {CsvType} from "../../types";


const FabIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {data} = useAppSelector(state => state.data)
  const [csvData, setCsvData] = useState<CsvType[]>([])

  useEffect(()=>{
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

  // const csvData = location.pathname === '/' || (data && data.length > 0) ? d : []

  const getCsvHandler = () => {
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
