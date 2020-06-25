import React from 'react'
import Champion from '../components/Champion';
import { Grid } from '@material-ui/core';

function ChampionList() {
  return (
    <Grid container direction="row">
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
    </Grid>
  )
}

export default ChampionList
