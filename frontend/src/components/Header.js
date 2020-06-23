import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import {  Button, Grid, TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core'; 
import Alert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';


function Header() {
  const regions = ['na1','br1','oc1','la1','la2','jp1','kr','eun1','euw1','tr1','ru']

  const { setValue, register, handleSubmit, errors, control } = useForm()

  const onSubmit = (data, e) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  const handleChange = (event) => {
    const { name } = event.target;
    setValue(name, event.target.value)
  }

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <h1>Welcome to TFT-Analytics</h1>
        </Grid>

        <Grid item xs={6}>
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
              variant="filled"
              inputRef={register({ required: true })}
              label="Summoner Name"
              size="small"
              name="summonername"
            />

            <Button type="submit" size="small" variant="contained" color="primary"   startIcon={<SearchIcon /> }   >Search</Button>
          </form>

          {errors.summonername && <Alert severity="error">Summoner Name is required.</Alert>}
        </Grid>{/* End of form-Grid */}    
      </Grid>  {/* End of Main-Grid */}    
    </div>
  )
}

export default Header
