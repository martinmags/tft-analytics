import React, {useState, useEffect} from 'react'
import StarIcon from '@material-ui/icons/Star';
import { Tooltip, Grid, Avatar, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'; 


const useStyles =  makeStyles((theme) =>({
  cardchampion:{ 
    height: 80,
    width: 50
  },
  cardicon:{
    height: 15,
    width: 15
  },
  cardchampionicon:{
    height: 48,
    width: 48,
    
  }
}));

async function getChampJSON() {
  try {
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/tft-champion.json');
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function getItemsJSON() {
  try {
    const response = await fetch('http://ddragon.leagueoflegends.com/cdn/13.18.1/data/en_US/tft-item.json');
    const responseJson = await response.json();
    return responseJson.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const SpriteImage = ({ source, x, y, width, height }) => {
  const spriteStyle = {
    backgroundImage: `url(${source})`,
    backgroundPosition: `-${x}px -${y}px`,
    width: width,
    height: height,
  };

  return <div style={spriteStyle} />;
};


function Champion(props) {
  const classes = useStyles();  
  const dic = {0: "#808080", 1: "#11B288", 2: "#207AC7", 3:"#C440DA",  4:"#FFBC42"};


  
  const [itemImages, setItemImages] = useState({});
  
  useEffect(() => {
    async function fetchItemImages() {
      const itemsJSON = await getItemsJSON();
      if (itemsJSON) {
        const images = {};
        props.items.forEach(async (item) => {
          let key = item.slice();
          let isEmblem = false;
          if(item.includes('Emblem')){
            key = 'TFT9_EmblemItems/' + key;
          }
          else if(item.includes('Radiant')){
            key = 'Set5_RadiantItems/' + key;
          }
          else if(item.includes('Shimmerscale')){
            key = 'TFT7_ShimmerscaleItems/' + key;
          }
          else if(item.includes('HeimerUpgrade')){
            key = 'TFT9_Items/' + key;
          }
          const png = itemsJSON[key].image.full;
          const imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/tft-item/${png}`;
          images[item] = imageUrl;
        });
        setItemImages(images);
      } else {
        console.log("Fetching JSON item failed");
      }
    }
    
    fetchItemImages();
  }, [props.items]);
  
  const [champImages, setChampImages] = useState({});

  const w = 48, h = 48;

  useEffect(() => {
    async function fetchChampImages() {
      const champsJSON = await getChampJSON();
      if (champsJSON) {
        const champData = champsJSON[props.champ];
        const png = champData.image.sprite;
        const x = champData.image.x;
        const y = champData.image.y;
        const imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/sprite/${png}`;
        // images[props.champ] = imageUrl;
        setChampImages({ imageUrl, x, y });
      } else {
        console.log("Fetching JSON champ failed");
      }
    }

    fetchChampImages();
  }, [props.champ]);
  

  return (
      <Box className={classes.cardchampion}  mx={0.5} my={1}>
        {/* CHAMPION STARS */}
        <Grid container direction="row">
          {[...Array(props.stars)].map((e, idx) => 
            <Grid key={`${props.champkey}${idx}`} item>
              <StarIcon style={{ color: dic[props.cost]}} className={classes.cardicon} />
            </Grid>)
          } 
        </Grid>
        <Box mb={1} >
          <Tooltip arrow title={props.champ}>
            <>
              <Avatar
                title={props.champ}
                className={classes.cardchampionicon}
                variant="rounded"
                style={{
                  boxShadow: `0px 0px 5px 2px ${dic[props.cost]}`,
                  border: `1px solid ${dic[props.cost]}`,
                }}
                // src="https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft9_irelia_mobile.tft_set9.png"
              >
                {champImages && (
                  <SpriteImage
                    // source="https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft9_irelia.tft_set9.png"
                    source={champImages.imageUrl}
                    x={champImages.x}
                    y={champImages.y}
                    width={w} // Set the width and height as per your requirements
                    height={h}
                  />
                )}
              </Avatar> 
            </>
          </Tooltip>
        </Box>
 
      
        {/* CHAMPION ITEMS GRID */}
        <Grid container direction="row">
          { props.items.map((item, idx) =>
            <Grid key={`${props.champkey}${idx}`} item>
              <Tooltip arrow title={item}>
                <>
                  <Avatar
                    title={item}
                    className={classes.cardicon}              
                    src={itemImages[item]} 
                  />
                </>
              </Tooltip>
            </Grid>         
          )}
        </Grid>
      </Box> 
  )
}

export default Champion
