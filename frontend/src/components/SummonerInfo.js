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
      <SummonerNameCard name={props.name} profileiconid={props.profileiconid} summonerlevel={props.summonerlevel} /> 
      {/* SummonerRankCard Component*/}
      { typeof(props.tier) !== 'undefined' ? 
          <SummonerRankCard tier={props.tier} division={props.division} lp={props.lp} wins={props.wins} losses={props.losses}/> :
          <UnrankedCard />
      }
    </Grid> 
  )
}

export default SummonerInfo
