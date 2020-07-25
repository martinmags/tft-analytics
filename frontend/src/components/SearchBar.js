import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Controller } from 'react-hook-form';
import { Button, Grid, TextField, MenuItem, FormControl, InputLabel, Select, Typography, Box } from '@material-ui/core'; 
import SearchIcon from '@material-ui/icons/Search';
import Alert from '@material-ui/lab/Alert';
import { Redirect } from 'react-router-dom';



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
  },
  textField:{
    backgroundColor: '#892D99',
    borderRadius:"0px 5px 5px 0px",
    border: `1px solid ${theme.palette.background.paper}`,
 
  },
  controller:{
    backgroundColor: '#892D99',
    borderRadius:"5px 0px 0px 5px",
    border: `1px solid ${theme.palette.background.paper}`
  }
}));


function Search() {
  const classes = useStyles();
  const regions = ['na1','br1','oc1','la1','la2','jp1','kr','eun1','euw1','tr1','ru']
  const [urlRedirect, setUrlRedirect] = useState('');
  const { setValue, register, handleSubmit, errors, control } = useForm()

  const handleChange = (event) => {
    const { name } = event.target;
    setValue(name, event.target.value)
  }

  const onSubmit = (data, e) => {
    /* Update (summonername, region) */
    const summonername = data.summonername.toLowerCase()
    const region = data.region.toLowerCase()
    setUrlRedirect(`/summonerstats/${region}/${summonername}`);
  }

  return (
    <Grid container item justify="center" >
      {/* User Error Code */}
      <Grid item xs={12}>
        {errors.summonername && <Alert severity="error">Summoner Name is required.</Alert>}
        {!errors.summonername && 
          <Box className={classes.shadowBox}>
            <Typography>Data-driven human learning</Typography>
          </Box>
        }
      </Grid>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <Grid container item direction="row"  className={classes.form} xs={12}>
          <Grid item xs={2}>
            <Controller
                className={classes.controller}
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
          <Grid item xs={8}>
            <TextField   
              inputRef={register({ required: true })}
              label="Summoner Name"
              size="small"
              name="summonername"
              variant="filled"
            />
          </Grid>
          <Grid item xs={2}>
            <Button className={classes.button} variant="contained" type="submit" size="small" color="secondary" ><SearchIcon/></Button>
          </Grid>
        </Grid>        
      </form>
      { (urlRedirect !== '') && (<Redirect to={urlRedirect} />) }

    </Grid>
  )
}

export default Search
