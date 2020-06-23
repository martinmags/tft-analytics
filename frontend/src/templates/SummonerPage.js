import React from 'react';   
import {  makeStyles   } from '@material-ui/core/styles';
import {  Grid, Box  } from '@material-ui/core';
import SummonerNameCard from '../components/SummonerNameCard';
import SummonerRankCard from '../components/SummonerRankCard';
import MatchHistoryTabSelector  from '../components/MatchHistoryTabSelector';

import MatchSummaryCard from '../components/MatchSummaryCard';
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
 

function SummonerPage() {
  const classes = useStyles();
 
  return (  
    <Box  className={ classes.grey}>
        <Box mx={{  xs:2, md:16}} >
            <Grid   container   spacing={0} direction="row"   >
                <Grid item xs={12} md={6}>
                    <SummonerNameCard 
                        name = "BabyGerber"
                        region = "NA"
                        icon = "http://ddragon.leagueoflegends.com/cdn/10.12.1/img/profileicon/588.png"
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