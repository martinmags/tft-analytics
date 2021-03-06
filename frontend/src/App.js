import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider , responsiveFontSizes } from '@material-ui/core/styles';
/* Static Components */
import Header from './components/Header'
/* Dynamic Components */
import HomePage from './templates/HomePage'
import SummonerPage from './templates/SummonerPage'

let theme = createMuiTheme({
  palette:{
    secondary:{
      main:"#FFBC42"
    },
    background:{
      paper: '#270D2C',
      default:'#62206D'
    },
    text:{
      primary:'#ffffff',
      secondary: '#ffffff'
    },
    spacing:8,
  } 
});
theme = responsiveFontSizes(theme);
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>      
        <CssBaseline/>
        <Router>
            <Header/> 
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/summonerstats/:region/:summonername" component={SummonerPage} />
              </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
