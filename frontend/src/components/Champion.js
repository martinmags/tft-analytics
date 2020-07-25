import React from 'react'
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
    height: 45,
    width: 45,
    
  }
}));

function Champion(props) {
  const classes = useStyles();  
  const dic = {0: "#808080", 1: "#11B288", 2: "#207AC7", 3:"#C440DA",  4:"#FFBC42"};
  const itemDic = {
    1:"B.F. Sword",
    2:"Recurve Bow",
    3:"Needlessly Large Rod",
    4:"Tear of the Goddess",
    5:"Chain Vest",
    6:"Negatron Cloak",
    7:"Giant's Belt",
    8:"Spatula",
    9:"Sparring Gloves",
    11:"Deathblade",
    12:"Giant Slayer",
    13:"Hextech Gunblade",
    14:"Spear of Shojin",
    15:"Guardian Angel",
    16:"Bloodthirster",
    17:"Zeke's Herald",
    18:"Blade of the Ruined King",
    19:"Infinity Edge", 
    22:"Rapid Firecannon",
    23:"Guinsoo's Rageblade",
    24:"Statikk Shiv",
    25:"Titan's Resolve",
    26:"Runaan's Hurricane",
    27:"Zz'Rot Portal",
    28:"Infiltrator's Talons",
    29:"Last Whisper",
    33:"Rabadon's Deathcap",
    34:"Luden's Echo",
    35:"Locket of the Iron Solari",
    36:"Ionic Spark",
    37:"Morellonomicon",
    38:"Battlecast Plating",
    39:"Jeweled Gauntlet",
    44:"Blue Buff",
    45:"Frozen Heart",
    46:"Chalice of Power",
    47:"Redemption",
    48:"Star Guardian's Charm",
    49:"Hand of Justice",
    55:"Bramble Vest",
    56:"Sword Breaker",
    57:"Red Buff",
    58:"Rebel Medal",
    59:"Shroud of Stillness",
    66:"Dragon's Claw",
    67:"Zephyr",
    68:"Celestial Orb",
    69:"Quicksilver",
    77:"Warmog's Armor",
    78:"Protector's Chestguard",
    79:"Trap Claw",
    88:"Force of Nature",
    89:"Dark Star's Heart",
    99:"Thief's Gloves",
  };

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
            <Avatar className={classes.cardchampionicon} title={props.champ }   variant="rounded"  
              src={`http://d2tjld7v9ietdh.cloudfront.net/champs/${props.champ}.png`} 
              style = { {boxShadow: `0px 0px 5px 2px ${dic[props.cost]}`, 
                        border: `1px solid ${dic[props.cost]} `}}/>  
          </Tooltip>
        </Box>
 
      
        {/* CHAMPION ITEMS GRID */}
        <Grid container direction="row">
          { props.items.map((item, idx) =>
            <Grid key={`${props.champkey}${idx}`} item>
              <Tooltip arrow title={itemDic[item]}>
                <Avatar
                  title={item}
                  className={classes.cardicon}              
                  src={`http://d2tjld7v9ietdh.cloudfront.net/items/${
                    item > 9 ? "" + item : "0" + item}.png`} 
                />
              </Tooltip>
            </Grid>         
          )}
        </Grid>
      </Box> 
  )
}

export default Champion
