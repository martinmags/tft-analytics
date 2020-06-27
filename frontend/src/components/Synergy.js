import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Avatar, Typography } from '@material-ui/core';

const useStyles =  makeStyles((theme) =>({
  text:{
    textAlign:'center'
  }
}));

function Synergy(props) {  
  const classes = useStyles();

  return (
    <Grid container direction="row">
      {props.traits ? props.traits.map((trait, i) => 
        <Grid item key={i}>
          <Typography className={classes.text}>{trait.tier_current}/{trait.tier_total}</Typography>
          <Avatar variant="circle" title={trait.name}
              src={`http://d2tjld7v9ietdh.cloudfront.net/traits/${trait.style}/${trait.name}.png`} /> 
        </Grid>) : null
      }
    </Grid>
  )
}

export default Synergy
