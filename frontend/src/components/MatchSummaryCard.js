import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import {  Avatar,Grid,  Box, Typography } from '@material-ui/core';
import Cybernetic from '../assets/icons/traits/Cybernetic.png';
import ChampWithItemCard from '../components/ChampWithItemCard';
const styles =  theme =>({
    grey: {
        backgroundColor:'#EBEBEB',
      },    
      white:{
        backgroundColor:'#FFFFFF'
      },
      whiteText:{
        color:'#FFFFFF'
      },
      black:{
        backgroundColor:'#000000'
      }
});

class MatchSummaryCard extends React.Component{
  
    render(){
        const {classes} = this.props;
        return(             
            <Grid item xs={12}> 
                <Box 
                    display="flex"  
                    height="60px" 
                    className={classes.black} 
                    borderRadius="15px 15px 0px 0px" 
                    justifyContent="center" 
                    alignItems="center"   
                    mx={2}
                    mb={0}
                    mt={2}
                >
                    <Box  display="flex" alignItems="center" justifyContent="center"    flexGrow="1" mx={1}  textAlign="center" >
                        <Typography className={classes.whiteText} variant="caption" > 1st</Typography>
                    </Box>
                    <Box  display="flex" alignItems="center" justifyContent="center"  flexGrow="1"   textAlign="center" >
                        <Box className = {classes.grey} borderRadius={5} px={2} py={0.5} >
                            <Typography   variant="caption"  > Normal</Typography>
                        </Box>
                    </Box>
                </Box> 
                <Box className={classes.white} mx={2} mb={2} borderRadius="0px 0px 15px 15px "   display="flex"   pb={2}   > 
                    <Grid container direction="row"   justify="flex-start" alignItems="flex-start" >
                        <Grid items xs={12}>
                            <Box  display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" ml={3} mr={3} mt={3} alignItems="flex-start" alignContent="flex-start">
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                                <Avatar   alt="synergy" src ={Cybernetic}/>
                            </Box>                                
                            <Box  display="flex" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" ml={3} mr={3} mt={3} alignItems="flex-start" alignContent="flex-start">
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                                <ChampWithItemCard></ChampWithItemCard>
                            </Box>
                        </Grid>                            

                    </Grid>
                </Box>
            </Grid>
        );
    }

}

export default withStyles(styles)(MatchSummaryCard);