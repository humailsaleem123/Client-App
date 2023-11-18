import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "bootstrap/dist/css/bootstrap.css";
import { Container, Typography, Box, Button } from "@mui/material";
import SliderItem from "./SliderItem";
import { makeStyles } from "@mui/styles";
import './FirstSlider.css';
import { sliderItems, responsive } from './SliderData';

const useStyles = makeStyles({
  ControllButton: {
    borderRadius: "50% !important",
    padding: "15px !important",
    border: "none",
    background: "#FFF !important",
    boxShadow:
      "rgba(50, 50, 93, 0.25) -1px 2px 5px 0px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
    margin: "3px 0 0 21px;",
  },
  goalSection: {
    padding: '45px 0 83px 0'
  }
});

const ToUpperCase = ({ text }: any) => {
  return text.toUpperCase();
};

const CustomButtonGroupAsArrows = ({ next, previous, handleDisabled }: any) => {

  const classes = useStyles();




  const handleNext = () => {

    console.log("dadad", handleDisabled());
    next();
    if (handleDisabled() === true) {
      next();
      setIsClicked(false);
    }
    else {
      setIsClicked(true);

    }

  };

  const handlePrevious = () => {


    if (handleDisabled() === true) {
      setIsClicked(true);
    }
    else {
      setIsClicked(false);
      previous();
    }


  };


  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <Box display='flex' justifyContent='flex-end' gap={4}>

      <Button className={classes.ControllButton} onClick={handlePrevious}>

        <ArrowBackIcon style={{ fontSize: 30, color: '#000' }} />

      </Button>

      <Button className={classes.ControllButton} onClick={handleNext}>

        <ArrowForwardIcon style={{ fontSize: 30, color: '#000' }} />

      </Button>
    </Box>
  );
};







const FirstSlider = () => {


  const classes = useStyles();


  const product = sliderItems.map((item: any) => (
    <SliderItem imageUrl={item.imageUrl} itemTitle={item.itemTitle} />
  ));

  const itemMargin = 100;

  const carouselRef = useRef<any | null>(null);


  const handleNext = () => {
    if (carouselRef.current) {

      carouselRef.current.next();

    }
  };

  const handlePrevious = () => {
    if (carouselRef.current) {

      carouselRef.current.previous();


    }
  };


  const handleDisabled = () => {

    console.log("carouselRef.current", carouselRef.current);


    if (carouselRef.current) {


      if (carouselRef.current.state.currentSlide === 0) {
        return true;
      }

    }
  };



  return (
    <Box className={classes.goalSection} sx={{ padding: 8, background: "#FFF" }}>



      <Container maxWidth={false} >
        <Typography
          variant="h2"
          fontWeight="900"
          letterSpacing="-3px"
          marginTop="7px"
        >
          <Box display='flex' alignItems='center' justifyContent='space-between'>
            <ToUpperCase text="popular goals" style={{ fontWeight: 900 }} />
            <CustomButtonGroupAsArrows next={handleNext} previous={handlePrevious} handleDisabled={handleDisabled} />
          </Box>

        </Typography>

        <Carousel
          ref={carouselRef}
          arrows={false}
          renderButtonGroupOutside={true}
          responsive={responsive}
          itemClass={`carousel-item-padding-${itemMargin}`}
        >
          {product}

        </Carousel>

      </Container>


    </Box>
  );
};

export default FirstSlider;