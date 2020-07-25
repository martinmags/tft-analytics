import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import {  Box, Grid, Card, CardContent, CardHeader, CardActions, IconButton, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChampionList from '../components/ChampionList';
import Synergy from '../components/Synergy';

const useStyles =  makeStyles((theme) =>({
  color1:{
    backgroundColor:theme.palette.background.paper,
  },
  expand:{
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen:{
    transform: 'rotate(180deg)'
  }
}));

function MatchHistory(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    alert(`${expanded} -> ${!expanded}`)
    setExpanded(!expanded);
  }
  const dic = {1: "#e4c15a", 2: "#90a5a8", 3: "#a76f4c", 4:"#270d2c",  
               5: "#270d2c", 6: "#270d2c", 7: "#270d2c", 8:"#270d2c"};

  let matchType = ''
  if (props.queue === 1090){
    matchType="Normal"
  }else if (props.queue === 1100){
    matchType="Ranked"
  }
  
  return (
    <Box my={2}>
      <Grid container item justify="center">
        <Grid item xs={12}>
          <Card  >
            <Box width={1} height="15px"
              style={{backgroundColor: `${dic[props.position]}`}}>
            </Box>
            <CardHeader 
              title={`#${props.position}`} 
              subheader={
                <div>
                  <Typography>{matchType}</Typography>
                  <Typography>Lvl {props.level}</Typography>
                </div>
              }
            />
            <CardContent>
              <Synergy traits={props.traits}/>       {/* Synergy Component */}
              <ChampionList key={props.matchkey} matchkey={props.matchkey} units={props.units} /> {/* ChampionList Component */}
            </CardContent>
            <CardActions>
              <IconButton 
                className={
                  clsx(classes.expand, {[classes.expandOpen]: expanded,})
                } 
                onClick={handleExpandClick}>
                <ExpandMoreIcon/>
              </IconButton>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>

  )
}

export default MatchHistory
