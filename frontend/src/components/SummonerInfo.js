import React from 'react'
import {  makeStyles   } from '@material-ui/core/styles';
import {  Grid } from '@material-ui/core';
import SummonerNameCard from '../components/SummonerNameCard';
import SummonerRankCard from '../components/SummonerRankCard';

const useStyles =  makeStyles((theme) =>({
  root: {
    backgroundColor:'#37474F',
  }
}));

function SummonerInfo() {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      direction="row"
      justify="space-evenly"
      className={classes.root}
      xs={12}
    >
      <SummonerNameCard /> {/* SummonerNameCard Component */}
      <SummonerRankCard /> {/* SummonerRankCard Component*/}
    </Grid> 
  )
}

export default SummonerInfo
