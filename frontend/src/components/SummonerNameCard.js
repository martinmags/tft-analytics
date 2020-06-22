import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import {  Typography,Avatar, Grid, Container, Box } from '@material-ui/core';

const styles =  theme =>({
    root: {
      flexGrow: 1,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
 
    white:{
      backgroundColor:'#FFFFFF'
    },
   
});

class SummonerNameCard extends React.Component{
  
    render(){
        const {classes} = this.props;
        return(             
        <Box height="120px" className={classes.white } m={2}borderRadius={15}  >
        <Grid   justify="center" alignItems="center" container spacing={1} direction="row" >
          <Grid item  xs={2 } >
            <Box >
              <Avatar alt="User Avatar" src = {this.props.icon} className={classes.large}/>
            </Box>
          </Grid>
          <Grid item  xs={10}>
            <Container  className={classes.white }  >
              <Typography variant="h4">  
                {this.props.name}
              </Typography>
              <Typography variant="h6">
                {this.props.region}
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>);
    }

}

export default withStyles(styles)(SummonerNameCard);