import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardHeader, CardActions, IconButton } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChampionList from '../components/ChampionList';
import Synergy from '../components/Synergy';

const useStyles =  makeStyles((theme) =>({
  color1:{
    backgroundColor:'#CFD8DC',
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
  let position = ''
  if (props.position === 1){
    position = '1st'
  }else if (props.position === 2){
    position = '2nd'
  }else if (props.position === 3){
    position = '3rd'
  }else{
    position = `${props.position}th`
  }

  return (
    <Grid container item justify="center">
      <Grid item xs={11}>
        <Card className={classes.color1}>
          <CardHeader 
            title={position} 
            subheader="Normal" 
          />
          <CardContent>
            <Synergy traits={props.traits}/>       {/* Synergy Component */}
            <ChampionList units={props.units} /> {/* ChampionList Component */}
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
  )
}

export default MatchHistory
