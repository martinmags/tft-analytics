import React from 'react'
import {  Grid } from '@material-ui/core';
import SummonerNameCard from '../components/SummonerNameCard';
import SummonerRankCard from '../components/SummonerRankCard';

function SummonerInfo() {

  return (
    <Grid
      container
      item
      direction="row"
      justify="space-evenly"
      xs={12}
    >
      <SummonerNameCard /> {/* SummonerNameCard Component */}
      <SummonerRankCard /> {/* SummonerRankCard Component*/}
    </Grid> 
  )
}

export default SummonerInfo
