import React from 'react'
import { Grid, Avatar } from '@material-ui/core';
import Cybernetic from '../assets/icons/traits/Cybernetic.png';

function Synergy(props) {
  
  console.log("IN SYNERGY: ", props.traits)
  
  return (
    <Grid container direction="row">
      
      {props.traits ? props.traits.map((trait, i) => 
      <Grid item>
        <Avatar variant="circle" 
            src={`http://d2tjld7v9ietdh.cloudfront.net/traits/${trait.style}/${trait.name}.png`} /> 
      </Grid>) : null}
      
      
      {/* <Grid item>
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
      </Grid> */}
    </Grid>
  )
}

export default Synergy
