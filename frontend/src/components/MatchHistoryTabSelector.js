import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import {  Typography,  Box } from '@material-ui/core';

const styles =  theme =>({
 
    white:{
      backgroundColor:'#FFFFFF'
    },
   
});

class MatchHistoryTabSelector extends React.Component{
  
    render(){
        const {classes} = this.props;
        return(             
            <Box   className={classes.white} m={2} borderRadius={15}   display="flex" flexWrap="wrap" justifyItems="center" height="120px"     >
            <Box width="100%" textAlign="center" my={2}>
                <Typography variant="h5">Match History</Typography>
            </Box>
            <Box  width="100%" justifyContent="center" my={2} display="flex"   >
                <Box flexGrow="1" mx={1} textAlign="center">
                    <Typography variant="h6">ALL</Typography>
                </Box>
                <Box flexGrow="1" mx={1} textAlign="center">
                    <Typography variant="h6">RANKED</Typography>
                </Box>
                <Box flexGrow="1" mx={1} textAlign="center">
                    <Typography variant="h6">NORMAL</Typography>
                </Box>
            </Box>
        </Box>
        );
    }

}

export default withStyles(styles)(MatchHistoryTabSelector);