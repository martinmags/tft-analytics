import React, { useState, useEffect } from 'react';   
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SummonerInfo from '../components/SummonerInfo';
import MatchHistoryCard from '../components/MatchHistoryCard';
import MatchHistoryTabSelector  from '../components/MatchHistoryTabSelector';
import { useParams } from 'react-router-dom'

const useStyles =  makeStyles((theme) =>({
  root: {
    paddingTop: 8*3
  },
}));

function SummonerPage() {
  const { summonername, region } = useParams()
  let urlSummoner = `http://localhost:8000/api/matchhistory?summoner=${summonername}&server=${region}`
  const [name, setName] = useState('')
  const [profileIconId, setProfileIconId] = useState('')

  useEffect(()=>{
    /* Reset State */
    setName('')
    // setUrl('')

    // Fetch for summoner info (SummonerNameCard and SummonerRankCard props)
    fetch(urlSummoner)
    .then((response)=> {return response.json()})
    .then((data)=>{
      const { name, profileiconid } = data.playerinfo
      /* Update State */
      setName(name)
      setProfileIconId(profileiconid)
    }).catch(error =>{
      console.log(error)
    })
  }, [urlSummoner])
  


  

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <SummonerInfo name={name} profileiconid={profileIconId}/> 
        {/* TODO: Setup <Switch> Routing to render depending on "All"   "Ranked"   "Normal" */}
        <MatchHistoryTabSelector /> {/* TODO: Need to refactor */}
        <MatchHistoryCard /> 
        <MatchHistoryCard /> 
        <MatchHistoryCard /> 
      </Grid>
    </div>
  );
}

export default SummonerPage;