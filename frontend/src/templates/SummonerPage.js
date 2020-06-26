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
  const root = `http://localhost:8000/api`;
  const query = `?summoner=${ summonername }&server=${ region }`;
  let urlSummoner = root + "/matchhistory" + query;
  const [name, setName] = useState('')
  const [profileIconId, setProfileIconId] = useState('')
  const [units, setUnits] = useState(null);
  const [traits, setTraits] = useState(null);
  
  let rankUrl = root + "/rankinfo" + query;
  const [tier, setTier] = useState('');
  const [division, setDiv] = useState('');
  const [lp, setLP] = useState(0);

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
      
      //Set units array
      const {units, traits} = data.matchhistory[0]
      
      setUnits(units)
      console.log(units)
      
      setTraits(traits)
      console.log(traits)
      
      
    }).catch(error =>{
      console.log(error)
    })
  }, [urlSummoner])
  
  useEffect(() => {
    /* Reset State */
    setName('')
    // setUrl('')

    // Fetch for summoner info (SummonerNameCard and SummonerRankCard props)
    fetch(rankUrl)
      .then((response) => { return response.json() })
      .then((data) => {
        console.log(data)
        const { tier, division, lp } = data
        /* Update State */
        setTier(tier)
        setDiv(division)
        setLP(lp)
      }).catch(error => {
        console.log(error)
      })
  }, [rankUrl])


  

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container direction="column">
        <SummonerInfo name={name} profileiconid={profileIconId} tier={tier} division={division} lp={lp}/> 
        {/* TODO: Setup <Switch> Routing to render depending on "All"   "Ranked"   "Normal" */}
        <MatchHistoryTabSelector /> {/* TODO: Need to refactor */}
        
        {console.log("IN SUMMONER PAGE: ", units)}
        <MatchHistoryCard units={units} traits={traits}/> 
        <MatchHistoryCard /> 
        <MatchHistoryCard /> 
      </Grid>
    </div>
  );
}

export default SummonerPage;