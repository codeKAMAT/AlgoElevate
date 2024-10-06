// src/index.tsx
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/global.scss'; // Import the global styles
import { Provider } from 'react-redux';
import { store } from './app/store';
import { ThemeProvider } from '@mui/material';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
     <App />
    </ThemeProvider>
  </Provider>
);
