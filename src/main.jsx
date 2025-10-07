import React from 'react'
import ReactDOM from 'react-dom/client'
import store from './store';
import { Provider } from "react-redux"
import axios from "axios"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from 'stylis';
import App from './App.jsx'
import './index.css'
import { getCookie } from './helper/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'

axios.defaults.baseURL = import.meta.env.VITE_SANJAB_API_URL;
axios.defaults.headers.common["authorization"] = "Bearer " + getCookie("jwt");
axios.defaults.headers.common["Content-Type"] = "application/json";

const { palette } = createTheme();
const { augmentColor } = palette;

const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });

const theme = createTheme({
  direction: "rtl",
  palette: {
    orange: createColor("#FF5644"),
    white: createColor("#fff")
  }
});

const cacheRTL = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});


if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (error) => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/firebase-messaging-sw.js').then((registration) => {
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, (error) => {
      console.log('ServiceWorker registration failed: ', error);
    });
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CacheProvider value={cacheRTL}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  </React.StrictMode>,
)
