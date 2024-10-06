import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3DDC97', // Teal color from your logo
    },
    secondary: {
      main: '#2F3437', // Dark gray from your logo
    },
    text: {
      primary: '#000000', // Light gray from your logo
    },
  },
  typography: {
    fontFamily: 'Courier, monospace', // Extracted from your logo
  },
});

export default theme;
