import React from 'react'
import { Grid } from '@material-ui/core';
import SummonerNameCard from '../components/SummonerNameCard';
import SummonerRankCard from '../components/SummonerRankCard';
import UnrankedCard from '../components/UnrankedCard';

function SummonerInfo(props) {
  return (
    <Grid
      container
      item
      direction="row"
      justify="space-evenly"
      xs={12}
    >
      {/* SummonerNameCard Component */}
      <SummonerNameCard name={props.name} profileiconid={props.profileiconid} wins={props.wins} losses={props.losses}/> 
      {/* SummonerRankCard Component*/}
      { props.tier !== 'unranked' ? 
          <SummonerRankCard tier={props.tier} division={props.division} lp={props.lp}/> :
          <UnrankedCard />
      }
    </Grid> 
  )
}

export default SummonerInfo
