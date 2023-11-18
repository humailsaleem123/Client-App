import { Box, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from '@mui/styles';
import NavigateNextIcon from "@mui/icons-material/NavigateNext";


const useStyles = makeStyles({
  ItemImage: {
    width: 210,
    height: 245,
    margin: "auto",
    display: "block",
    borderTopLeftRadius: '2%',
    borderBottomLeftRadius: '3%'
  },
  ItemHeading: {
    fontSize: '30px',
    fontWeight: 700,
    margin: '5px 0 0 30px',
  },
  ItemButton: {
    float: 'right',
    position: 'absolute',
    bottom: '12px',
    right: '25px',
    color: '#000',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 500,
    "&:hover": {
      color: '#F33E56',
      textDecoration: 'none'
    },
  }
});


const ToUpperCase = ({ text }: any) => {
  return (
    text.toUpperCase()
  )
}

export default function SliderItem(props: any) {
  const classes = useStyles();
  return (
    <Box className="card" width='463px' height='245px'>
      <Box className="row">
        <Box className="col-sm-5">
          <img
            className={classes.ItemImage}
            src={props.imageUrl}
            alt=""
          />
        </Box>
        <Box className="col-sm-7">
          <Box className="card-block">
            {/* <h1 className={classes.ItemHeading}><ToUpperCase text={props.itemTitle}/></h1> */}
            <Typography variant="h3" fontWeight='700' marginLeft='30px' marginTop='5px'><ToUpperCase text={props.itemTitle} /></Typography>
            <br />
            <a href="#" className={classes.ItemButton}>
              Set this goal <NavigateNextIcon />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>

  );
}
