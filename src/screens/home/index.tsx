import * as React from "react";
import {useState} from "react";
import styles from "./home.module.css"
import {
  Button,
  Checkbox,
  Container,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  Pagination,
  Select,
  TextField,
} from "@mui/material";
import Box from "@mui/material/Box";
import {useApolloGraphql} from "../../hooks/useApolloGraphql";
import {Controller, useForm} from "react-hook-form";
import CharactersGrid from "../../components/characters-grid";
import {useHistory} from "../../hooks/useHistory";

type RequestDataType = {
  charName?: string
  charStatus?: string
  charSpecies?: string
  charType?: string
  charGender?: string
}

type FilterDataType = {
  name?: string
  status?: string
  species?: string
  type?: string
  gender?: string
}

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [filterList, setFilterList] = React.useState<string[]>([]);
  const {getUsers} = useApolloGraphql()
  const {control, handleSubmit} = useForm<RequestDataType>({
    defaultValues: {
      charName: undefined,
      charStatus: undefined,
      charSpecies: undefined,
      charType: undefined,
      charGender: undefined,
    }
  });

  const DEF_PARAMS = {
    name: undefined,
    status: undefined,
    species: undefined,
    type: undefined,
    gender: undefined,
  }

  const [charFilters, setCharFilters] = useState<FilterDataType>(DEF_PARAMS)

  const {pages, characters, loading} = getUsers({currentPage, ...charFilters})

  const filters = ['Character', 'Location', 'Episodes']
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const {saveToHistory} = useHistory()

  const stepHandler = (_: any, value: number) => {
    setCurrentPage(value)
    window.scrollTo({top: 0, behavior: "smooth"})
  }

  const handleChange = (event: any) => {
    const {
      target: {value},
    } = event;

    let duplicateRemoved: string[] = [];

    value.forEach((item: string) => {
      if (duplicateRemoved.findIndex((o) => o === item) >= 0) {
        duplicateRemoved = duplicateRemoved.filter((x) => x === item);
      } else {
        duplicateRemoved.push(item);
      }
    });

    setFilterList(duplicateRemoved)
  }

  const filterHandler = (data: RequestDataType) => {
    const params = {
      name: data.charName,
      status: data.charStatus,
      species: data.charSpecies,
      type: data.charType,
      gender: data.charGender,
    }
    setCharFilters(params)

    const historyString = `Пошук за параметрами - ${data.charName ? ' Персонаж: ' + data?.charName + ';' : ''}${data.charStatus ? ' Статус: ' + data.charStatus + ';' : ''}${data.charSpecies ? ' Раса: ' + data.charSpecies + ';' : ''}${data.charType ? ' Тип створіння:' + data.charType + ';' : ''}${data.charGender ? ' Пол:' + data.charGender + ';' : ''}`
    saveToHistory(historyString)
  }

  const selectOpenHandler = () => {
    setIsFilterOpen(true)
  }

  const selectCloseHandler = () => {
    if (!filterList.length) {
      setIsFilterOpen(false)
    }
  }

  const clearHandler = () => setCharFilters(DEF_PARAMS)

  return (
    <Container className={styles.wrapper}>
      <form onSubmit={handleSubmit(filterHandler)}>
        <Box
          marginBottom={3}
          display={'flex'}
          gap={5}
        >
          <FormControl
            sx={{width: 200}}
            className={styles.form}
          >
            <InputLabel id="demo-simple-select-label">Filter</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={filterList}
              label='Filter'
              onChange={handleChange}
              renderValue={(selected) => selected.map((x) => x).join(', ')}
              onOpen={selectOpenHandler}
              onClose={selectCloseHandler}
            >
              {filters.map(variant => (
                <MenuItem
                  key={variant}
                  value={variant}
                >
                  <Checkbox
                    checked={filterList.findIndex((item) => {
                      return item === variant
                    }) >= 0}
                  />
                  <ListItemText primary={variant}/>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            position={'relative'}
            sx={{width: 270}}
            className={styles.inputsWrapper}
          >
            <FormControl
              className={styles.inputs}
              sx={{width: 250}}
            >
              {filterList.indexOf('Character') !== -1 && <>
								<Controller
									name="charName"
									control={control}
									render={({field}) =>
                    <TextField
                      className={styles.input}
                      label="Char Name"
                      variant="outlined"
                      onChange={field.onChange}
                    />
                  }
								/>
								<Controller
									name="charStatus"
									render={({field}) =>
                    <TextField
                      className={styles.input}
                      label="Char Status"
                      variant="outlined"
                      onChange={field.onChange}
                    />
                  }
									control={control}
								/>
								<Controller
									name="charSpecies"
									control={control}
									render={({field}) =>
                    <TextField
                      className={styles.input}
                      label="Char Species"
                      variant="outlined"
                      onChange={field.onChange}
                    />
                  }
								/>
								<Controller
									name="charType"
									control={control}
									render={({field}) =>
                    <TextField
                      className={styles.input}
                      label="Char Type"
                      variant="outlined"
                      onChange={field.onChange}
                    />
                  }
								/>
								<Controller
									name="charGender"
									control={control}
									render={({field}) =>
                    <TextField
                      className={styles.input}
                      label="Char Gender"
                      variant="outlined"
                      onChange={field.onChange}
                    />
                  }
								/>
							</>}
              {filterList.indexOf('Location') !== -1 && <>
								<TextField
									className={styles.input}
									id="loc-name"
									label="Location Name"
									variant="outlined"
								/>
								<TextField
									className={styles.input}
									id="loc-type"
									label="Location Type"
									variant="outlined"
								/>
								<TextField
									className={styles.input}
									id="loc-dimension"
									label="Location Dimension"
									variant="outlined"
								/>
							</>}
              {filterList.indexOf('Episodes') !== -1 && <>
								<TextField
									className={styles.input}
									id="ep-name"
									label="Episode Name"
									variant="outlined"
								/>
								<TextField
									className={styles.input}
									id="ep-episodes"
									label="Episodes"
									variant="outlined"
								/>
							</>}
            </FormControl>
          </Box>
          <Box>
            {!!filterList.length && <Button
							size={'large'}
							variant="outlined"
							color={'inherit'}
							sx={{width: '120px', height: '55px'}}
							type={'submit'}
						>FIND</Button>}
          </Box>
          <Box>
            {!!filterList.length && <Button
							size={'large'}
							variant="outlined"
							color={'inherit'}
							sx={{width: '120px', height: '55px'}}
							onClick={clearHandler}
						>CLEAR SEARCH</Button>}
          </Box>
          {/*Yep, I know that show comment code it's not a good idea, but it's not a release version))) */}
          {/*{isFilterOpen && <Box*/}
          {/*	bgcolor={'#00000099'}*/}
          {/*	position={'absolute'}*/}
          {/*	left={0}*/}
          {/*	right={0}*/}
          {/*	top={0}*/}
          {/*	bottom={0}*/}
          {/*	zIndex={1}*/}
          {/*/>}*/}
        </Box>
      </form>
      <CharactersGrid {...{characters, loading}}/>
      <footer
        className={styles.pagination}
      >
        <Pagination
          count={pages}
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
