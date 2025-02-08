import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: { main: '#1976d2' }, // Bleu
        secondary: { main: '#dc004e' }, // Rouge
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
        background: { default: '#121212' },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
});

export { lightTheme, darkTheme };
