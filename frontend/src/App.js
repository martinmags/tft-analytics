import React from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';

/* Static Components */
import Header from './components/Header'

/* Dynamic Components */
import HomePage from './templates/HomePage'
import SummonerPage from './templates/SummonerPage'

function App() {
  return (
    <div className="App">
      <CssBaseline/>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/"> <HomePage/> </Route>
          <Route exact path="/summonerstats/:summonername/:region"> <SummonerPage/> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
