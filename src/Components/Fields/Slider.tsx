import React from "react";
import { Slider, Typography } from "@mui/material";
import { useField } from "formik";

const SliderWrapper = ({ name, ...otherProps }: any) => {

  const [field, mata] = useField(name);


  const configSlider = {
    ...field,
    ...otherProps,
    value: field.value || 0,
  };

  return (


    <React.Fragment>

      <Slider {...configSlider as any} aria-label="Default" valueLabelDisplay="auto" />

      {mata.touched && mata.error && field.value !== 0 && <Typography variant="body2" color={'red'}>{mata.error}</Typography>}


    </React.Fragment>
  );
};

export default SliderWrapper;