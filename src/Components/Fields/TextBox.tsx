import React from 'react';
import TextField from '@mui/material/TextField'
import { useField } from 'formik';
import { styled } from "@mui/material/styles";


const StyledTextField = styled(TextField)({
  "& label": {
    color: "gray"
  },
  "&:hover label": {
    fontWeight: 700
  },
  "& label.Mui-focused": {
    color: "#ffb510"
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white"
  },
  "& .MuiOutlinedInput-root": {
    background: "#FFF",
    color: "#000",
    "& fieldset": {
      borderColor: "#999999",

    },
    "&:hover fieldset": {
      borderColor: "white",
      borderWidth: 2
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ffb510"
    }
  }
});

const TextBoxWrapper = ({ name, ...otherProps }: any) => {

  const [field, mata] = useField(name);

  const configTextfield = {
    ...field,
    ...otherProps,
    fullWidth: true,
    variant: 'outlined',
    margin: "normal",
    size: 'small'
  };

  if (mata && mata.touched && mata.error) {
    configTextfield.error = true;
    configTextfield.helperText = mata.error;
  }

  return (

    <TextField
      color='primary'
      autoComplete="off"
      multiline
      rows={8}
      sx={{
        "& .MuiInputBase-root": {
          height: 350

        }
      }}
      {...configTextfield}
    />

  );
};

export default TextBoxWrapper;