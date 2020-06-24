import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, AppBar, Typography } from '@material-ui/core'; 
import SearchBar from '../components/SearchBar';

const useStyles =  makeStyles((theme) =>({
  title:{
    fontSize: 16*2,
    paddingTop: 8*2,
  },
  grey:{
    backgroundColor: "#78909C"
  }
}));
function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.grey} position="static">
      <Grid container direction="column" justify="center" alignItems="center" >
        <Grid item xs={12}>
          <Typography className={classes.title}>TFT-Analytics</Typography>
        </Grid>
        <SearchBar />
      </Grid>  {/* End of Main-Grid */}   
    </AppBar>
  )
}

export default Header