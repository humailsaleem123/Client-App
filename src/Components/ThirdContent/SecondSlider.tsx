import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Typography, Box, Button } from "@mui/material";
import SliderItem from "./SliderItem";
import { makeStyles } from "@mui/styles";
import "./SecondSlider.css";
import { sliderItems, responsive } from "./SliderData";
import React, { useRef } from "react";

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
  sectionHeading: {
    fontWeight: '900 !important',
    letterSpacing: "-3px",
    fontFamily: 'Oswald'
  },
  CustomerSliderButton: {
    position: 'absolute',
    top: '112rem',
    right: 54
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


export default function SecondSlider() {



  const classes = useStyles();
  const product = sliderItems.map((item: any) => (
    <SliderItem imageUrl={item.imageUrl} itemTitle={item.itemTitle} />
  ));
  const itemStyle = 10;

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
    <Box sx={{ padding: 8 }}>
      <Container maxWidth={false}>

        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <Typography
            variant="h2"
            className={classes.sectionHeading}
          >
            <span style={{ color: '#F33E56' }}>3338</span><span> CUSTOMERS, OVER </span><span style={{ color: '#F33E56' }}>$400,000 </span><span>PLEDGED</span>
          </Typography>

          <CustomButtonGroupAsArrows next={handleNext} previous={handlePrevious} handleDisabled={handleDisabled} />
        </Box>
        <Carousel
          ref={carouselRef}
          arrows={false}
          renderButtonGroupOutside={true}
          // customButtonGroup={<CustomButtonGroupAsArrows />}
          responsive={responsive}
          itemClass={`carousel-item-padding-${itemStyle}`}
        >
          {product}

        </Carousel>
      </Container>
    </Box>
  );
}
