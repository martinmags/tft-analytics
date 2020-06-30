import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardHeader, Avatar, LinearProgress, Typography } from '@material-ui/core';
import RankGold from '../assets/ranks/Emblem_Gold.png';

const useStyles =  makeStyles((theme) =>({
  root: {
    height: 130
  }
}));

function SummonerRankCard(props) {
  const classes = useStyles();
  return (
    <Grid item xs={10} sm={5}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="Rank Gold" src={RankGold}/>
          }
          title={props.tier + " " + props.division}
          subheader={
            <div>
            <Typography>{props.lp} LP</Typography>
            <LinearProgress variant="determinate" value={props.lp}  />
            </div>
          }
        />
        <CardContent>
          <Typography>Wins: {props.wins} Losses: {props.losses}</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SummonerRankCard
