import React from 'react';   
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress } from '@material-ui/core';
import SummonerInfo from '../components/SummonerInfo';
import MatchHistoryCard from '../components/MatchHistoryCard';
import useFetch from '../hooks/HttpRequests';
import { useParams } from 'react-router-dom';


const useStyles =  makeStyles((theme) =>({
  root: {
    paddingTop: 8*3
  },
}));

function SummonerPage() {
  const classes = useStyles();
  const { summonername, region } = useParams()
  const root =`http://localhost:8000/api`;
  const query = `?summoner=${summonername}&server=${region}`;

  /* summonerStats Fetch (includes name, profileicon, and matchhistory */
  let urlSummoner = root + "/matchhistory" + query;
  let summonerStats =  useFetch(urlSummoner)
  
  /* rankStats Fetch */
  let urlRank = root + "/rankinfo" + query;
  let rankStats = useFetch(urlRank)

  /* Determine what to display */
  let content = null

  // State 0: Loading 
  if (summonerStats.loading){
    content = (
      <Grid item>
        <CircularProgress />
      </Grid>
    )
  } 

  // State 1: Successful Fetch => Display matches 
  if (summonerStats.data){
    const { name, profileiconid } = summonerStats.data.playerinfo
    const matchhistory  = summonerStats.data.matchhistory
    
    const { division=null, losses=null, lp=null, tier=null, wins=null } = rankStats.data
    console.log("PLAYERINFO:")
    console.log(summonerStats.data.playerinfo)
    console.log("MATCHHISTORY:")
    console.log(matchhistory[0].units)
    console.log("RANKSTATS:")
    console.log(rankStats.data)
    
    content = (
      <Grid item>
        <SummonerInfo name={name} profileiconid={profileiconid} tier={tier} division={division} lp={lp} wins={wins} losses={losses} />
       { matchhistory.map((match,idx) => <MatchHistoryCard key={idx} units={match.units} traits={match.traits}/>) } 
      </Grid> 
    )
  }

  // State 2: Resource Not Found => Display error
  if (summonerStats.error){
    content = (
      <Grid item>
        <h1>Not found</h1>
      </Grid>
    )
  }

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" alignItems="center">
        {content}
      </Grid>
    </div>
  );
}

export default SummonerPage;