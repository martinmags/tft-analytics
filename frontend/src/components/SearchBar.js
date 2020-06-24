import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid, TextField, MenuItem, FormControl, InputLabel, Select, Typography, Box } from '@material-ui/core'; 
import { Redirect } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';


const useStyles =  makeStyles((theme) =>({
  form:{
    paddingTop: 8,
    paddingBottom: 8*2
  },
  shadowBox:{
    height: 48,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    height: 48
  }
}));
function Search() {
  const classes = useStyles();
  const regions = ['na1','br1','oc1','la1','la2','jp1','kr','eun1','euw1','tr1','ru']
  const { setValue, register, handleSubmit, errors, control } = useForm()
  const [redirect, setRedirect] = useState(false);
  const [url, setUrl] = useState('');
  const [alert, setAlert] = useState(false)

  const handleChange = (event) => {
    const { name } = event.target;
    setValue(name, event.target.value)
  }
  
  const onSubmit = (data, e) => {
    let urlRedirect = `/summonerstats/${data.summonername}/${data.region}`;
    let urlFetch = `http://localhost:8000/api?summoner=${data.summonername}&server=${data.region}`
    console.log(data);

    fetch(urlFetch)
      .then(response => {return response.json()})
      .then(data => {
        console.log(data)
        // IF Successful
        setRedirect(true);
        setUrl(urlRedirect)
        setAlert(false)
      }).catch(error =>{
        setAlert(true)
      })
  };
  return (
    <div>
      <Grid item xs={12}>
        {errors.summonername && <Alert severity="error">Summoner Name is required.</Alert>}
        {alert && <Alert position="relative" severity="error">Summoner Doesn't Exist</Alert>}
        {!errors.summonername && !alert && 
          <Box className={classes.shadowBox}>
            <Typography>Data-driven human learning</Typography>
          </Box>
        }
      </Grid>
      <Grid container item direction="row" justify="center" className={classes.form}>
      <form onSubmit={ handleSubmit(onSubmit) }>
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
          <TextField   
            inputRef={register({ required: true })}
            label="Summoner Name"
            size="small"
            name="summonername"
            variant="filled"
          />
          <Button className={classes.button} variant="contained" type="submit" size="small" color="secondary" ><SearchIcon/></Button>
      </form>
      </Grid>
      { redirect && (<Redirect to={url} />) }

    </div>
  )
}

export default Search
