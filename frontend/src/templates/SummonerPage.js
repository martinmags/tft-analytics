import React from 'react';   
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, CircularProgress, Typography } from '@material-ui/core';
import SummonerInfo from '../components/SummonerInfo';
import MatchHistoryCard from '../components/MatchHistoryCard';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/HttpRequest';
import useFetchDependent from '../hooks/HttpRequestDependent';

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

  /* Determine what to display */
  let summonerinfo_content = null
  let matchhistory_content = null

  /* summoner Fetch */
  let path = `/${region}/${summonername}`;
  let urlSummoner = root + "/summonerinfo" + path;
  const summoner = useFetch(urlSummoner)
  
  /* 
    matchHistory Fetch (Dependent Fetch on summoner Fetch)
      [ {units:[], traits:[], position, level, queue} ,... ]
  */
  path = `/${region}/`
  let urlMatchHistory = root + "/matchhistory" + path;
  const matchHistory = useFetchDependent(urlMatchHistory, summoner)

  /* rankStats Fetch (Dependent Fetch on summoner Fetch) */
  let urlRank = root + "/rankinfo" + path;
  let rankStats = useFetchDependent(urlRank, summoner);

  // State 0: Loading TODO: Can split loading into each section
  if (summoner.loading || rankStats.loading){
    summonerinfo_content = (
      <Grid item className={classes.center}>
        <CircularProgress />
      </Grid>
    )
  } 
  if (matchHistory.loading){
    matchhistory_content = (
      <Grid item className={classes.center}>
        <CircularProgress />
      </Grid>
    )
  }

  // State 1: Successful Fetches
  if (summoner.data && rankStats.data){
    const { name, profileIconId, summonerLevel } = summoner.data
    const { division='', losses=0, wins=0, lp=0, tier='unranked' } = rankStats.data

    summonerinfo_content = (
      <Grid item xs={12}>
        <SummonerInfo name={name} profileiconid={profileIconId} summonerlevel={summonerLevel} tier={tier} division={division} lp={lp} wins={wins} losses={losses} />
      </Grid> 
    )
  }
  if (matchHistory.data){
    const { matchhistory } = matchHistory.data

    matchhistory_content = (
      <Grid item xs={12}>
        { matchhistory.length > 0 ? matchhistory.map((match,idx) => 
          <MatchHistoryCard key={`match${idx}`} matchkey={`match${idx}`} units={match.units} traits={match.traits} position={match.position} level={match.level} queue={match.queue}/>) : 
          <Typography className={classes.center}>No Matches Found</Typography> 
        }
      </Grid>  
    )
    
  }

  // State 2: Resource Not Found => Display error
  if (summoner.error){
    summonerinfo_content = (
      <Grid item>
        <h1>Not found</h1>
      </Grid>
    )
    matchhistory_content = null
  }

  return (
    <div className={classes.root}>
      <Grid container direction="column" justify="center" >
        <Box mx={{ xs:4, sm:8,md:16, l:32}}>
          {summonerinfo_content}
          {matchhistory_content}
        </Box>
      </Grid>
    </div>
  );
}

export default SummonerPage;