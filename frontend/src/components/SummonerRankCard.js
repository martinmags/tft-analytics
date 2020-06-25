import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardHeader, Avatar, LinearProgress } from '@material-ui/core';
import RankGold from '../assets/ranks/Emblem_Gold.png';

const useStyles =  makeStyles((theme) =>({
  root: {
    height: 125
  }
}));

function SummonerRankCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={10} sm={3}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="Rank Gold" src={RankGold}/>
          }
          title={props.tier + " " + props.division}
          subheader={props.lp}
        />
        <CardContent>
          <LinearProgress variant="determinate" value={50}  />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SummonerRankCard
