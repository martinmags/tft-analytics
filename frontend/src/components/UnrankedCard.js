import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, Avatar} from '@material-ui/core';
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
          title="Tier"
          subheader="Unranked"
        />
      </Card>
    </Grid>
  )
}

export default SummonerRankCard
