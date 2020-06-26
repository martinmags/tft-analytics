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

  /* summonerStats Fetch (includes name, profileicon, and matchhistory */
  const root =`http://localhost:8000/api`;
  const query = `?summoner=${summonername}&server=${region}`;
  let urlSummoner = root + "/matchhistory" + query;
  let summonerStats =  useFetch(urlSummoner)
  
  /* rankStats Fetch */
  let urlRank = root + "/rankinfo" + query;
  let rankStats = useFetch(urlRank)

  /* Determine what to display */
  let content = null

  // Loading 
  if (summonerStats.loading){
    content = (
      <Grid item>
        <CircularProgress />
      </Grid>
    )
  } 

  // Successful Fetch; Display matches 
  if (summonerStats.data){
    const { name, profileiconid } = summonerStats.data.playerinfo
    const matchhistory  = summonerStats.data.matchhistory
    
    const { division=null, losses=null, lp=null, tier=null, wins=null } = rankStats.data

    console.log(summonerStats.data.playerinfo)
    console.log(matchhistory)
    console.log(rankStats.data)
    
    content = (
      <SummonerInfo name={name} profileiconid={profileiconid} tier={tier} division={division} lp={lp} wins={wins} losses={losses} />
      // <MatchHistoryCard />
    )
  }

  // Not Found 
  if (summonerStats.error){
    content = (
      <h1>Not found</h1>
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