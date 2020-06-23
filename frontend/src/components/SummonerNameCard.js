import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import {  Typography,Avatar,  Box } from '@material-ui/core';

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
            <Box  className={classes.white} m={2} borderRadius={15}   display="flex" alignItems="center" height="120px"    >
                <Box flexGrow="1" mr={2} ml={4} >
                    <Avatar   alt="User Avatar" src = {this.props.icon} className={classes.large}/>
                </Box>
                <Box flexGrow="5" ml={2} mr={4}   >
                    <Typography variant="h5" my={2}>  
                        {this.props.name}
                    </Typography>
                    <Typography variant="caption" my={2}>
                        {this.props.region}
                    </Typography>
                </Box>
            </Box>
        );
    }

}

export default withStyles(styles)(SummonerNameCard);