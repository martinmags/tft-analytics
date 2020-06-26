import React from 'react'
import {  Grid } from '@material-ui/core';
import SummonerNameCard from '../components/SummonerNameCard';
import SummonerRankCard from '../components/SummonerRankCard';

function SummonerInfo(props) {
  return (
    <Grid
      container
      item
      direction="row"
      justify="space-evenly"
      xs={12}
    >
      <SummonerNameCard name={props.name} profileiconid={props.profileiconid} wins={props.wins} losses={props.losses}/> {/* SummonerNameCard Component */}
      <SummonerRankCard tier={props.tier} division={props.division} lp={props.lp}/> {/* SummonerRankCard Component*/}
      
    </Grid> 
  )
}

export default SummonerInfo
