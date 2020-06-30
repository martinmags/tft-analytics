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
    <div>
      {/* User Error Code */}
      <Grid item xs={12}>
        {errors.summonername && <Alert severity="error">Summoner Name is required.</Alert>}
        {!errors.summonername && 
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
        { (urlRedirect !== '') && (<Redirect to={urlRedirect} />) }

      </Grid>
    </div>
  )
}

export default Search
