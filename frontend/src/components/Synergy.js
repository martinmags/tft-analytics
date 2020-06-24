import React from 'react'
import { Grid, Avatar } from '@material-ui/core';
import Cybernetic from '../assets/icons/traits/Cybernetic.png';

function Synergy() {
  return (
    <Grid container direction="row">
      <Grid item>
        <Avatar variant="circle" src={Cybernetic}></Avatar>
      </Grid>
      <Grid item>
        <Avatar variant="circle" src={Cybernetic}></Avatar>
      </Grid>
      <Grid item>
        <Avatar variant="circle" src={Cybernetic}></Avatar>
      </Grid>
      <Grid item>
        <Avatar variant="circle" src={Cybernetic}></Avatar>
      </Grid>
      <Grid item>
        <Avatar variant="circle" src={Cybernetic}></Avatar>
      </Grid>
      <Grid item>
        <Avatar variant="circle" src={Cybernetic}></Avatar>
      </Grid>
      <Grid item>
        <Avatar variant="circle" src={Cybernetic}></Avatar>
      </Grid>
    </Grid>
  )
}

export default Synergy
