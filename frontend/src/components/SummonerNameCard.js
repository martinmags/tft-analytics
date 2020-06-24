import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';

const useStyles =  makeStyles((theme) =>({
  root: {
    height: 125
  }
}));

function SummonerNameCard() {
  const classes = useStyles();

  return (
    <Grid item xs={10} sm={3}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="User Avatar" src ="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/profileicon/588.png"/>
          }
          title="BabyGerber"
          subheader="NA"
        />
        <CardContent>
          <Typography>Extra summoner info here</Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default SummonerNameCard
