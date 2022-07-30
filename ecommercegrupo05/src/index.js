import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './redux/store';
import { ChakraProvider } from '@chakra-ui/react'
import {themes} from './styles/themes.js'
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain='dev-81nqhdy2.us.auth0.com'
    clientId='A6q8eeIevBO37mbaercJOAcuJU1LRRns'
    redirectUri={window.location.origin}
  >
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <ChakraProvider theme={themes}>
        <App/>
        </ChakraProvider>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  </Auth0Provider>
);

