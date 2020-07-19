import React from 'react'
import Champion from '../components/Champion';
import { Grid } from '@material-ui/core';

function ChampionList(props) {
  return (
    <Grid container direction="row">
      { props.units ? props.units.map((unit, idx)=> 
        <Champion 
          key={`${props.matchkey}${idx}`} 
          champkey={`${props.matchkey}${idx}`} 
          champ={unit.character_id} 
          stars={unit.tier} 
          items={unit.items}
          cost={unit.rarity}/> )
        : null 
      }
    </Grid>
  )
}

export default ChampionList
