import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  palette: {
    background: {
      default: '#F7F8FA',
      paper: '#FFFFFF',
    },
    primary: {
      main: '#5932EA',
    },
    text: {
      primary: '#000000',
      secondary: '#A3AED0',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', height: '100vh' }}>
        {!isMobile && <Sidebar />}
        <Box component="main" sx={{ flexGrow: 1, overflow: 'auto' }}>
          <Header isMobile={isMobile} />
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;