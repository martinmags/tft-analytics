import React from 'react';   
import { createMuiTheme , makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import {  Grid, Container } from '@material-ui/core';
import SummonerNameCard from '../components/SummonerNameCard';
import SummonerRankCard from '../components/SummonerRankCard';
const useStyles =  makeStyles((theme) =>({
  root: {
    flexGrow: 1,
  },
 
  grey: {
    backgroundColor:'#EBEBEB',
  },
 
}));
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function SummonerPage() {
  const classes = useStyles();
 
  return (  
      <Container  maxWidth='xl'  className={classes.root ,classes.grey}>
        <Grid  container   spacing={0} direction="row"   >
          <Grid item xs={12} md={6}>
            <SummonerNameCard 
              name = "BabyGerber"
              region = "NA"
              icon = "http://ddragon.leagueoflegends.com/cdn/10.12.1/img/profileicon/588.png"
            ></SummonerNameCard>
          </Grid>          
          <Grid item xs={12} md={6}>
            <SummonerRankCard
              rank ="Gold"
              rankNum = "69"
              lp = "42"
            ></SummonerRankCard>
          </Grid>
        </Grid>
      </Container> 
    );
}

export default SummonerPage;
