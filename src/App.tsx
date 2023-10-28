import React from 'react';
import Home from "./screens/home";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {API} from "./services/get-data";
import './reset.css'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import styles from './app.module.css'
import {Container} from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const client = new ApolloClient({
  uri: API,
  cache: new InMemoryCache()
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Container
        className={styles.app}
        maxWidth={'xl'}
      >
        <ApolloProvider client={client}>
          <Home/>
        </ApolloProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
