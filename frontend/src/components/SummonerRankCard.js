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
            <Box  height="120px"  className={classes.white } m={2} borderRadius={15} >
              <Grid justify="center" alignItems="center" container spacing={1} direction="row">
                <Grid item xs={2} >
                  <Box>
                    <Avatar alt="User Avatar" variant="square" src={RankGold} className={classes.large}/>
                  </Box>
                </Grid>
                <Grid item xs={10} >
                  <Box className={classes.white } m={2}  > 
                    <Grid  container direction="row">
                      <Grid item xs={12}>
                        <Typography variant="h4">  
                          Rank 
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="h6">  
                          {this.props.rank} {this.props.rankNum}
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography variant="h6">  
                        {this.props.lp} LP
                        </Typography>
                      </Grid>
                      <Grid item xs={12} >
                        <LinearProgress variant="determinate" value={this.props.lp}  />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Box>
        );
    }

}

export default withStyles(styles)(SummonerRankCard);