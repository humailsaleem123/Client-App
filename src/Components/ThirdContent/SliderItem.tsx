import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Typography } from "@mui/material";

const useStyles = makeStyles({
  cardDescription: {
    color: '#fff'
  }
})
export default function SliderItem(props: any) {
  const classes = useStyles();
  return (
    <Box className="card" style={{ backgroundImage: `url(${props.imageUrl})`, width: '260', height: '245px' }}>
      <Box className={`card-description ${classes.cardDescription}`}>
        <Typography>{props.itemTitle}</Typography>
      </Box>
      <a className="card-link" href="#" ></a>
    </Box>
  )
}
