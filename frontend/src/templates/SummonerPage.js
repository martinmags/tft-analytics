import React from 'react';   
import {  makeStyles   } from '@material-ui/core/styles';
import {  Grid, Box  } from '@material-ui/core';
import SummonerNameCard from '../components/SummonerNameCard';
import SummonerRankCard from '../components/SummonerRankCard';
import MatchHistoryTabSelector  from '../components/MatchHistoryTabSelector';
import {
  useParams
} from "react-router-dom";


import MatchSummaryCard from '../components/MatchSummaryCard';
import { useState } from 'react';
const useStyles =  makeStyles((theme) =>({
  root: {
    flexGrow: 1,
  },
 
  grey: {
    backgroundColor:'#EBEBEB',
  },    
  white:{
    backgroundColor:'#FFFFFF'
  },
  whiteText:{
    color:'#FFFFFF'
  },
  black:{
    backgroundColor:'#000000'
  }
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
    <Box  className={ classes.grey}>
      {console.log( summoner )}
      {}
      <h1>Summoner: { summoner } </h1>
      
        <Box mx={{  xs:2, md:16}} >
            <Grid   container   spacing={0} direction="row"   >
                <Grid item xs={12} md={6}>
                    <SummonerNameCard 
                        name = {name}
                        region = "NA"
                        icon = {`http://ddragon.leagueoflegends.com/cdn/10.12.1/img/profileicon/${profileIconId}.png`}
                    >
                    </SummonerNameCard>
                </Grid>          
                <Grid item xs={12} md={6}>
                    <SummonerRankCard
                        rank ="Gold"
                        rankNum = "69"
                        lp = "42"
                    >
                    </SummonerRankCard>
                </Grid>
                <Grid item xs={12}>
                    <MatchHistoryTabSelector></MatchHistoryTabSelector>
                </Grid>            
                <MatchSummaryCard></MatchSummaryCard>
            </Grid>
        </Box> 
    </Box>
    );
}

export default SummonerPage;