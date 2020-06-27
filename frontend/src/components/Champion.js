import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import { Grid, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';
import amber from '@material-ui/core/colors/amber';


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
  
  const dic = {1: brown[800], 2: grey[800], 3: amber[800]}
  
  return (
      <Box className={classes.cardchampion}>
        
        {/* CHAMPION STARS */}
        <Grid container direction="row">
        {[...Array(props.stars)].map((e, idx) => <Grid item><StarIcon style={{ color: dic[props.stars]}} key={idx} className={classes.cardicon} /></Grid>)} 
        </Grid>
        
      <Avatar className={classes.cardchampionicon} title={props.champ}
        src={`http://d2tjld7v9ietdh.cloudfront.net/champs/${props.champ}.png`} />
      
        {/* CHAMPION ITEMS GRID */}
        <Grid container direction="row">
          
        { props.items.map((item, idx) =>
          <Grid item> 
            <Avatar
              key={idx}
              className={classes.cardicon}              
              src={`http://d2tjld7v9ietdh.cloudfront.net/items/${
                item > 9 ? "" + item : "0" + item}.png`} 
            />
          </Grid>         
        )}
        </Grid>
      </Box> 
  )
}

export default Champion
