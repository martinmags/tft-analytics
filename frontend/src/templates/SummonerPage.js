import React from 'react';   
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import SummonerInfo from '../components/SummonerInfo';
import MatchHistoryCard from '../components/MatchHistoryCard';
import MatchHistoryTabSelector  from '../components/MatchHistoryTabSelector';
import {
  useParams
} from "react-router-dom";

import MatchSummaryCard from '../components/MatchSummaryCard';
import { useState } from 'react';

const useStyles =  makeStyles((theme) =>({
  root: {
    paddingTop: 8*3
  },
}));

function SummonerPage(props) {
  const classes = useStyles();
  let { summoner, server} = useParams();
  console.log(summoner, server);
  
  const [name, setName] = useState(summoner);
  const [profileIconId, setIcon] = useState();
    
  setTimeout(() => {
    let url = new URL('http://localhost:8000/api/summonerinfo');
    url.search = new URLSearchParams([['summoner', summoner], ['server', server]]).toString();
    console.log(url);
    
    const f = fetch(url);

    const p = f.then(r => r.json());

    console.log(p);

    p.then((data) => {
      console.log(data);
      setTimeout(() => setName(data.name), 0);
      console.log(name);
      setTimeout(() => setIcon(data.profileIconId), 0);
      console.log(profileIconId);
    })}, 0
  );

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