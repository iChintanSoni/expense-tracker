import { createMuiTheme, CssBaseline, ThemeProvider, useMediaQuery } from '@material-ui/core';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { green, purple } from '@material-ui/core/colors';
import Welcome from './ui/auth/welcome/Welcome';
import SignIn from './ui/auth/sign-in/SignIn';
import SignUp from './ui/auth/sign-up/SignUp';
import Dashboard from './ui/dashboard/Dashboard'

const App = () => {

  // Splash screen timeout
  const splashTimeout = 3000;

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

  const history = useHistory()
  useEffect(() => {
    // After displaying Welcome screen for 3 seconds
    // go to SignIn page
    const timer = setTimeout(() => {
      history.push("/signin");
    }, splashTimeout);

    return function cleanup() {
      clearTimeout(timer);
    };
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/" component={Welcome} exact />
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
