import React from 'react';   
import { createMuiTheme , makeStyles, responsiveFontSizes } from '@material-ui/core/styles';
import {  Grid, Box, Typography } from '@material-ui/core';
import SummonerNameCard from '../components/SummonerNameCard';
import SummonerRankCard from '../components/SummonerRankCard';
import MatchHistoryTabSelector  from '../components/MatchHistoryTabSelector';
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
let theme = createMuiTheme();
theme = responsiveFontSizes(theme);


function SummonerPage() {
  const classes = useStyles();
 
  return (  
    <Box  className={classes.root ,classes.grey}>
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
            <Grid item xs={12}>
                <Box className={classes.white} m={2} borderRadius={15}   display="flex"  height="280px"     > 
                    <Box 
                        display="flex" 
                        width="100%" 
                        height="60px" 
                        className={classes.black} 
                        borderRadius="15px 15px 0px 0px" 
                        justifyContent="center" 
                        alignItems="center" 
                    >
                        <Box  display="flex" alignItems="center" justifyContent="center"    flexGrow="1" mx={1}  textAlign="center" >
                            <Typography className={classes.whiteText} variant="caption" > 1st</Typography>
                        </Box>
                        <Box  display="flex" alignItems="center" justifyContent="center"  flexGrow="1"   textAlign="center" >
                            <Box className = {classes.grey} borderRadius={5} px={2} py={0.5} >
                                <Typography   variant="caption"  > Normal</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Grid>
            </Grid>
        </Box> 
    </Box>
    );
}

export default SummonerPage;