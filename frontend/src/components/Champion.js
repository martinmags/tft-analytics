import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { Grid, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles =  makeStyles((theme) =>({
  cardchampion:{
    margin: 0,
    height: 80,
    width: 50
  },
  cardicon:{
    height: 15,
    width: 15
  },
  cardchampionicon:{
    height: 45,
    width: 45
  }
}));

function Champion(props) {
  const classes = useStyles();
  
  console.log(props.stars)

  return (
      <Box className={classes.cardchampion}>
        <Grid container direction="row">
          
        {[...Array(props.stars)].map((e, idx) => <Grid item><StarIcon key={idx} className={classes.cardicon} /></Grid>)} 
          
          {/* <Grid item><StarIcon className={classes.cardicon}/></Grid>
          <Grid item><StarIcon className={classes.cardicon}/></Grid>
          <Grid item><StarIcon className={classes.cardicon}/></Grid> */}
        </Grid>
        
        {/* use this later on
        src={`http://d2tjld7v9ietdh.cloudfront.net/champs/${props.champ}.png`} */}
        
      <Avatar className={classes.cardchampionicon}
      src={`https://elasticbeanstalk-us-west-1-808664583376.s3-us-west-1.amazonaws.com/tft/champs/${props.champ}.png`} />
      
        {/* ITEMS GRID */}
        <Grid container direction="row">
          <Grid item><Avatar src="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/item/3072.png" className={classes.cardicon}/></Grid>
          <Grid item><Avatar src="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/item/3072.png" className={classes.cardicon}/></Grid>
          <Grid item><Avatar src="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/item/3072.png" className={classes.cardicon}/></Grid>
        </Grid>
      </Box> 
  )
}

export default Champion
