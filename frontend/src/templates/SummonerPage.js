import React from 'react';   
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SummonerInfo from '../components/SummonerInfo';
import MatchHistoryCard from '../components/MatchHistoryCard';
import MatchHistoryTabSelector  from '../components/MatchHistoryTabSelector';

const useStyles =  makeStyles((theme) =>({
  root: {
    paddingTop: 8*3
  },
}));
 
function SummonerPage() {
  const classes = useStyles();

  // TODO: Fetch Request to Flask backend and start looking into how to pass the data (Might need redux or reactcontext)
  return (
    <div className={classes.root}>
      <Grid container direction="column" spacing={3}>
        <SummonerInfo /> 
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