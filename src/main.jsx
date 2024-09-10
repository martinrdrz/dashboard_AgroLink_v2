import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { SnackbarProvider } from 'notistack';

const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            //main: '#1976d2', //blue
            //main: '#18a05a', //green
            main: '#d0b487', //marron
            contrastText: '#ffffff',
        },
        secondary: {
            //main: '#d67a16', //orange
            main: '#d67a16',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <SnackbarProvider maxSnack={3} autoHideDuration={2000}>
                <CssBaseline />
                <App />
            </SnackbarProvider>
        </ThemeProvider>
    </React.StrictMode>
);
