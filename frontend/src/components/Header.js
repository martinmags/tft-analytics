import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Link, Grid, Typography } from '@material-ui/core'; 
import SearchBar from '../components/SearchBar';
import { Link as RouterLink } from 'react-router-dom';

const useStyles =  makeStyles((theme) =>({
  title:{
    fontSize: 16*2,
    paddingTop: 8*2,
  },
  bg:{
    backgroundColor: theme.palette.background.paper
  }
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar className={classes.bg} position="static">
      <Grid container direction="column" justify="center" alignItems="center" >

        {/* Home Button */}
        <Grid item  >
          <Typography className={classes.title}>
            <Link component={RouterLink} to="/">TFT-Analytics</Link>
          </Typography>
        </Grid>

        <SearchBar />

      </Grid>  {/* End of Main-Grid */}   
    </AppBar>
    
  )
}

export default Header