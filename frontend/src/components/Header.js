import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid, TextField, MenuItem, FormControl, InputLabel, Select, AppBar, Typography } from '@material-ui/core'; 
import Alert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from 'react-router-dom';

const useStyles =  makeStyles((theme) =>({
  title:{
    fontSize: 16*2,
    paddingTop: 8*2,
    paddingBottom: 8*2
  },
  form:{
    paddingBottom: 8*2
  }
}));
function Header() {
  const classes = useStyles();
  const regions = ['na1','br1','oc1','la1','la2','jp1','kr','eun1','euw1','tr1','ru']
  const [redirect, setRedirect] = useState(false);
  const [url, setUrl] = useState('');
  const [alert, setAlert] = useState(false)
  const { setValue, register, handleSubmit, errors, control } = useForm()

  const onSubmit = (data, e) => {
    let urlRedirect = `/summonerstats/${data.summonername}/${data.region}`;
    let urlFetch = `http://localhost:8000/api?summoner=${data.summonername}&server=${data.region}`
    console.log(data);

    fetch(urlFetch)
      .then(response => {
        console.log(response)
      }).then(data => {
        console.log(data)
        // IF Successful
        setRedirect(true);
        setUrl(urlRedirect)
      }).catch(error =>{
        setAlert(true)
      })
    
    // IF Fail, then stay on same page, output some error to console and user
  };

  const handleChange = (event) => {
    const { name } = event.target;
    setValue(name, event.target.value)
  }

  return (
    <AppBar position="static">
      <Grid container direction="column" justify="center" alignItems="center" >
        <Grid item>
          <Typography className={classes.title}>TFT-Analytics</Typography>
        </Grid>

        <form onSubmit={ handleSubmit(onSubmit) }>
        <Grid container item direction="row" justify="center" alignItems="center" className={classes.form}>
          <Grid item>
            <TextField   
              variant="filled"
              inputRef={register({ required: true })}
              label="Summoner Name"
              size="small"
              name="summonername"
            />
          </Grid>
          <Grid item>
            <Controller
              as={
                <FormControl variant="filled" size="small">
                  <InputLabel shrink>Region</InputLabel>
                  <Select defaultValue="na1" name="region" onChange={handleChange}>
                    {regions.map((region) => <MenuItem key={region} value={region}>{region}</MenuItem>)}
                  </Select>
                </FormControl>
              }
              control={control}
              name="region"
              defaultValue="na1"
            />
          </Grid>
          <Grid item>
            <Button type="submit" size="small" variant="filled" color="primary" startIcon={<SearchIcon />} >Search</Button>
          </Grid>
        </Grid>
        </form>

        { redirect && (<Redirect to={url} />) }
        {errors.summonername && <Alert severity="error">Summoner Name is required.</Alert>}
        {alert && <Alert severity="error">Summoner Doesn't Exist</Alert>}

          
      </Grid>  {/* End of Main-Grid */}   
    </AppBar>
  )
}

export default Header
