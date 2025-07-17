import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store, { history } from './redux/store';
import { HistoryRouter } from 'redux-first-history/rr6';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './styles/main.scss';

const theme = createTheme({
  palette: {
    primary: { main: '#2196f3' },     
    background: { default: '#f0f8ff' } 
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </HistoryRouter>
  </Provider>
);
