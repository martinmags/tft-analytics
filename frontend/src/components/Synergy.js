import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Grid, Avatar, Typography } from '@material-ui/core';

const useStyles =  makeStyles((theme) =>({
  text:{
    textAlign:'center'
  }
}));


async function getTraitsJSON() {
  try {
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/tft-trait.json');
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function Synergy( props ) {  
  const classes = useStyles();

  const [traitImages, setTraitImages] = useState({});

  useEffect(() => {
    async function fetchTraitImages() {
      const traitsJSON = await getTraitsJSON();
      if (traitsJSON) {
        const images = {};
        props.traits.forEach(async (trait) => {
          const png = traitsJSON[trait.name].image.full;
          const imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/tft-trait/${png}`;
          images[trait.name] = imageUrl;
        });
        setTraitImages(images);
      } else {
        console.log("Fetching JSON trait failed");
      }
    }

    fetchTraitImages();
  }, [props.traits]);

  return (
    <Grid container direction="row">
      {props.traits ? props.traits.map((trait, i) => 
        <Grid item key={i}>
          <Typography className={classes.text}>{trait.tier_current}/{trait.tier_total}</Typography>
          <Tooltip arrow title={trait.name}>
            <Avatar variant="circular" title={trait.name}  src={traitImages[trait.name]} /> 
          </Tooltip>

        </Grid>) : null
      }
    </Grid>
  )
}

export default Synergy
