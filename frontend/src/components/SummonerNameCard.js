import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Card, CardContent, CardHeader, Typography, Avatar } from '@material-ui/core';

const useStyles =  makeStyles((theme) =>({
  root: {
    height: 130
  }
}));

function SummonerNameCard(props) {
  const classes = useStyles();
  const url = `http://ddragon.leagueoflegends.com/cdn/13.20.1/img/profileicon/${props.profileiconid}.png`
  return (
    <Grid item xs={12} sm={6}>
      
      <Box mr={{xs:0, sm:2}} mb={{xs:2, sm:0}} >
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
      </Box>

    </Grid>
  )
}

export default SummonerNameCard
