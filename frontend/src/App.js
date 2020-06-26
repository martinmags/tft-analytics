import React, { useState, useMemo } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { createMuiTheme, ThemeProvider , responsiveFontSizes } from '@material-ui/core/styles';
import { SummonerContext } from './SummonerContext';
/* Static Components */
import Header from './components/Header'
/* Dynamic Components */
import HomePage from './templates/HomePage'
import SummonerPage from './templates/SummonerPage'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function App() {
  const [summonerInfo, setSummonerInfo] = useState('')
  const providerValue = useMemo(()=> ({summonerInfo, setSummonerInfo}), [summonerInfo, setSummonerInfo])

  return (
    <div className="App">
      <CssBaseline/>
      <ThemeProvider theme={theme}>
      <Router>
        <SummonerContext.Provider value={providerValue}> {/* Allows access of Summoner info to any children components */}
          <Header/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/summonerstats/:region/:summonername" component={SummonerPage} />
          </Switch>
        </SummonerContext.Provider>
      </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
