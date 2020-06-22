import React from 'react'; 
import {  withStyles } from '@material-ui/core/styles';
import { LinearProgress,Typography,Avatar ,Grid, Box } from '@material-ui/core';

import RankGold from '../assets/ranks/Emblem_Gold.png';
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

class SummonerRankCard extends React.Component{
  
    render(){
        const {classes} = this.props;
        return(             
            <Box className={classes.white} m={2} borderRadius={15}   display="flex" alignItems="center" height="120px"    >
                <Box flexGrow="1" mr={2} ml={4}>
                    <Avatar alt="User Avatar" variant="square" src={RankGold} className={classes.large}/>
                </Box>
                <Box flexGrow="5" ml={2} mr={4}  >
                    <Box display="flex" my={1} alignItems="center" >
                        <Box flexGrow="4" justifyContent="flex-end" >
                            <Typography   variant="h6" >  
                                {this.props.rank} {this.props.rankNum}
                            </Typography>
                        </Box>
                        <Box flexGrow="1" textAlign="right" >
                            <Typography align="right" variant="caption" >  
                                {this.props.lp} LP
                            </Typography>
                        </Box>
                    </Box>
                    <Box my={1}>
                        <LinearProgress variant="determinate" value={this.props.lp}  />
                    </Box>
                </Box>
            </Box>
        );
    }

}

export default withStyles(styles)(SummonerRankCard);
    