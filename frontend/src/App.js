import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { createMuiTheme, ThemeProvider , responsiveFontSizes } from '@material-ui/core/styles';

// import logo from './logo.svg';

/* Static Components */
import Header from './components/Header'

/* Dynamic Components */
import HomePage from './templates/HomePage'
import SummonerPage from './templates/SummonerPage'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Header/>
        <Link to="/SummonerPage">fake link for testing</Link>
        <Switch>
          <Route exact path="/"> <HomePage/> </Route>
          <Route exact path="/summonerstats/:summonername/:region"> <SummonerPage/> </Route>
          <Route path="/SummonerPage"><SummonerPage></SummonerPage></Route>
        </Switch>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
