import React from 'react'
import Champion from '../components/Champion';
import { Grid } from '@material-ui/core';

function ChampionList() {
  return (
    <Grid container direction="row">
      <Grid item xs={2} sm={1}>
        {/* Champion Component */}
        <Champion/>
      </Grid>

      <Grid item xs={2} sm={1}>
        {/* Champion Component */}
        <Champion/>
      </Grid>

      <Grid item xs={2} sm={1}>
        {/* Champion Component */}
        <Champion/>
      </Grid>

      <Grid item xs={2} sm={1}>
        {/* Champion Component */}
        <Champion/>
      </Grid>

      <Grid item xs={2} sm={1}>
        {/* Champion Component */}
        <Champion/>
      </Grid>
    </Grid>
  )
}

export default ChampionList
