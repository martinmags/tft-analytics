import React from 'react';   
import { createMuiTheme, ThemeProvider , responsiveFontSizes } from '@material-ui/core/styles';
 
import SummonerPage from './templates/SummonerPage.js';
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
function App() { 
 
  return ( 
    <ThemeProvider theme={theme}>
      <SummonerPage></SummonerPage>
    </ThemeProvider>
  );
}

export default App;
