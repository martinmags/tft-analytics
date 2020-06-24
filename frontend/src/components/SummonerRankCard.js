import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardHeader, Avatar, LinearProgress } from '@material-ui/core';
import RankGold from '../assets/ranks/Emblem_Gold.png';

const useStyles =  makeStyles((theme) =>({
  root: {
    height: 125
  }
}));

function SummonerRankCard() {
  const classes = useStyles();
  return (
    <Grid item xs={10} sm={3}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="Rank Gold" src={RankGold}/>
          }
          title="Gold"
          subheader="50 LP"
        />
        <CardContent>
          <LinearProgress variant="determinate" value={50}  />
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SummonerRankCard
