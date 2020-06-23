import React from 'react';
import {  withStyles } from '@material-ui/core/styles';
import {  Avatar,Grid,  Box } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
const styles =  theme =>({
 
});

class ChampWithItemCard extends React.Component{
  
    render(){ 
        return(             
            <Box m={0.5}>
                <Grid container >
                    <Grid item xs={4}>
                        <Avatar style={{height: "20px", width:"20px"}} variant="circle"alt="synergy" src ="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/item/3031.png"/> 
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar style={{height: "20px", width:"20px"}} variant="circle"alt="synergy" src ="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/item/3046.png"/> 
                    </Grid>
                    <Grid item xs={4}>
                        <Avatar style={{height: "20px", width:"20px"}} variant="circle"alt="synergy" src ="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/item/3072.png"/> 
                    </Grid>
                </Grid>    
                <Avatar style={{height: "60px", width:"60px"}} variant="rounded"alt="synergy" src ="http://ddragon.leagueoflegends.com/cdn/10.12.1/img/champion/Aatrox.png"/> 
                <Grid container >
                    <Grid item xs={4}>
                         <StarIcon style={{height: "20px", width:"20px"}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <StarIcon style={{height: "20px", width:"20px"}}/>
                    </Grid>
                    <Grid item xs={4}>
                        <StarIcon style={{height: "20px", width:"20px"}} />
                    </Grid>
                </Grid>
            </Box>
        );
    }

}

export default withStyles(styles)(ChampWithItemCard);