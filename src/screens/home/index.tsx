import React, {useState} from "react";
import CharactersGrid from "../../components/characters-grid"
import styles from "./home.module.css"
import {Checkbox, Container, FormControl, InputLabel, ListItemText, MenuItem, Pagination, Select} from "@mui/material";
import {useQuery} from "@apollo/client";
import {charactersQuery} from "../../services/get-data";
import {CharacterType} from "../../types";
import Box from "@mui/material/Box";
import {setData} from "../../store/data/data.slices";
import {useAppDispatch} from "../../hooks/useAppStore";


const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterList, setFilterList] = React.useState<string[]>([]);

  const {data, loading, error} = useQuery(charactersQuery, {variables: {page: currentPage}})

  const characters: CharacterType[] = data?.characters?.results;
  const filters = ['Character', 'Location', 'Episodes']

  const stepHandler = (_: any, value: number) => {
    setCurrentPage(value)
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  const handleChange = (event: any) => {
    const {
      target: {value},
    } = event;

    console.log(123, value);
    const tmpList = [...filterList]
    const itemIndex = tmpList.indexOf(value[0])

    if (itemIndex < 0) {
      tmpList.push(value[0])
      setFilterList(tmpList)
    } else {
      setFilterList(filterList.filter(i => i === value[0]))
    }
  }

  return (
    <Container className={styles.wrapper}>
      <Box sx={{minWidth: 120, maxWidth: 200}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Filter</InputLabel>
          <Select
            labelId="demo-multiple-checkbox-label"
            id="demo-multiple-checkbox"
            multiple
            value={['Select:']}
            label='Filter'
            onChange={handleChange}
            renderValue={(selected) => selected.map((x) => x).join(', ')}
            // MenuProps={MenuProps}
          >
            {filters.map(variant => (
              <MenuItem
                key={variant}
                value={variant}
              >
                <Checkbox
                  checked={filterList.findIndex((item) => {
                    console.log({item, variant})
                    return item !== variant
                  }) >= 0}
                />
                <ListItemText primary={variant}/>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <CharactersGrid {...{characters, loading}}/>
      <footer
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
      </footer>
    </Container>
  );
};

export default Home
