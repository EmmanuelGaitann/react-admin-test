import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: { main: '#0787b5' }, 
        secondary: { main: '#f7752a' },//#1976d2
        background: { default: '#f4f6f8' },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: { fontSize: '2rem', fontWeight: 600 },
        body1: { fontSize: '1rem' },
    },
});

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: { main: '#90caf9' },
        secondary: { main: '#f48fb1' },
        background: { default: '#292828' },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export { lightTheme, darkTheme };
