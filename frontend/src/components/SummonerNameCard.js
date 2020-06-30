import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';

const useStyles =  makeStyles((theme) =>({
  root: {
    height: 130
  }
}));

function SummonerNameCard(props) {
  const classes = useStyles();
  const url = `http://ddragon.leagueoflegends.com/cdn/10.12.1/img/profileicon/${props.profileiconid}.png`
  return (
    <Grid item xs={10} sm={5}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="User Avatar" src ={url}/>
          }
          title={props.name}
          subheader={`Lvl ${props.summonerlevel}`}
        />
        <CardContent>
          <Typography>(Extra Summoner Info)</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SummonerNameCard
