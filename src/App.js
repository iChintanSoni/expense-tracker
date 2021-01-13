import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { useMemo } from 'react';
import { green, purple } from '@material-ui/core/colors';
import Welcome from './ui/auth/welcome/Welcome.js';

const App = () => {

  // Enabling Dark Mode according to system-wide setting
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () => createMuiTheme({
      palette: {
        mode: prefersDarkMode ? 'dark' : 'light',
        primary: purple,
        secondary: green
      },
    }),
    [prefersDarkMode],
  );

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Switch>
          <Route path="/" component={Welcome} exact />
          {/* <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/dashboard" component={Dashboard} /> */}
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
