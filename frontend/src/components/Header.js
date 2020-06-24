import React, {useState} from 'react'
import { useForm, Controller } from 'react-hook-form';
import {  Button, Grid, TextField, MenuItem, FormControl, InputLabel, Select } from '@material-ui/core'; 
import Alert from '@material-ui/lab/Alert';
import SearchIcon from '@material-ui/icons/Search';
import { Redirect } from 'react-router-dom';


function Header() {
  const regions = ['na1','br1','oc1','la1','la2','jp1','kr','eun1','euw1','tr1','ru']

  const { setValue, register, handleSubmit, errors, control } = useForm();
  
  const [toSummonerPage, setToSummonerPage] = useState(false);

  // var redirectPath = "/SummonerPage";
  let [redirPath, setPath] = useState("/summonerinfo");
  
  const onSubmit = (data, e) => {
    console.log(data);
    let j = JSON.stringify(data);
    alert(j);
        
    setTimeout(() => setToSummonerPage(true), 0);
    setTimeout(() => setPath(redirPath = "/summonerinfo"), 0);
    setTimeout(() => setPath(redirPath + "/" + data.summoner + "/" + data.server), 1);
  };

  const handleChange = (event) => {
    const { name } = event.target;
    setValue(name, event.target.value)
  }

  return (
    <div>
      {console.log(redirPath)}
      {toSummonerPage ? <Redirect to={redirPath} /> : setTimeout(() => setToSummonerPage(false), 0)}
      
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
                  <Select defaultValue="na1" name="server" onChange={handleChange}>
                    {regions.map((region) => <MenuItem key={region} value={region}>{region}</MenuItem>)}
                  </Select>
                </FormControl>
              }
              control={control}
              name="server"
              defaultValue="na1"
            />              
            <TextField   
              variant="filled"
              inputRef={register({ required: true })}
              label="Summoner Name"
              size="small"
              name="summoner"
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
