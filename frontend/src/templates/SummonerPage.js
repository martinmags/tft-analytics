import React from 'react';   
import { makeStyles } from '@material-ui/core/styles';
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import SummonerInfo from '../components/SummonerInfo';
import MatchHistoryCard from '../components/MatchHistoryCard';
import useFetch from '../hooks/HttpRequests';
import { useParams } from 'react-router-dom';


const useStyles =  makeStyles((theme) =>({
  root: {
    paddingTop: 8*3
  },
  center:{
    display: 'flex',
    justifyContent: 'center',
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
      <Grid item className={classes.center}>
        <CircularProgress />
      </Grid>
    )
  } 

  // State 1: Successful Fetch => Display matches 
  if (summonerStats.data){
    const { name, profileiconid, summonerlevel } = summonerStats.data.playerinfo
    const matchhistory  = summonerStats.data.matchhistory
    
    let division = ''
    let losses = 0 
    let wins = 0 
    let lp = 0
    let tier = 'unranked'
    try {
      division = rankStats.data.division
      losses = rankStats.data.losses
      wins = rankStats.data.wins
      lp = rankStats.data.lp
      tier = rankStats.data.tier
    }catch(error){
      console.log(error)
    }
    content = (
      <Grid item xs={12}>
        <SummonerInfo name={name} profileiconid={profileiconid} summonerlevel={summonerlevel} tier={tier} division={division} lp={lp} wins={wins} losses={losses} />
        { matchhistory.length > 0 ? matchhistory.map((match,idx) => 
            <MatchHistoryCard key={idx} units={match.units} traits={match.traits}/>) : 
            <Typography className={classes.center}>No Matches Found</Typography>
        } 
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
      <Grid container direction="column" justify="center" >
        {content}
      </Grid>
    </div>
  );
}

export default SummonerPage;