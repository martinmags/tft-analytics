import React from 'react'
import Champion from '../components/Champion';
import { Grid } from '@material-ui/core';

function ChampionList(props) {
  
  // console.log("IN ChampionList component: ", props.units)
  
  return (
    <Grid container direction="row">
      
      {/* {props.units ? props.units.map((unit, i) => <Champion champ={unit.character_id} /> ) : null} */}
      { props.units ? props.units.map((unit, idx)=> <Champion key={idx} champ={unit.character_id} stars={unit.tier} />) : null }
      
      {/* <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/>
      <Champion/> */}
    </Grid>
  )
}

export default ChampionList
