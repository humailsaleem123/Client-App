import React from "react";
import { TextField, Box } from "@mui/material";
import { useField } from "formik";

const Textfield2Wrapper = ({ name, ...otherProps }: any) => {
  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: "outlined",
    margin: "dense",
    size: "large",
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }


  return (

    <TextField sx={{
      background: '#FFF',
      "& .MuiInputBase-input": {
        fontSize: "18px"
      },
      "& input::placeholder": {
        fontSize: "18px"
      }

    }}  {...configTextfield} />

  );
};

export default Textfield2Wrapper;