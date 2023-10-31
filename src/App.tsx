import * as React from 'react';
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {API} from "./services/get-data";
import './reset.css'
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {BrowserRouter} from "react-router-dom";

import styles from './app.module.css'
import {Container} from "@mui/material";
import Router from "./route";
import Header from "./components/header";
import FabIcon from "./components/fab";
import {persistor, store} from "./store";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import History from './components/history'

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
      <BrowserRouter>
        <CssBaseline/>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <PersistGate
              loading={null}
              persistor={persistor}
            >
              <Header/>
              <Container
                className={styles.app}
                maxWidth={'xl'}
              >
                <FabIcon/>
                <History />
                <Router/>
              </Container>
            </PersistGate>
          </Provider>
        </ApolloProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
