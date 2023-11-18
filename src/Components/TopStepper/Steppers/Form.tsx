import React, { useContext } from 'react'
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import TextfieldWrapper from '../../Fields/TextField';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { contextStepper } from '../StepperContext';
import SelectWrapper from '../../Fields/SelectBox';


function Form() {

  const valuee = useContext(contextStepper);

  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  const region = {

    "United State": "United State",
    "UAE": "UAE",
    "France": "France",

  }


  return (

    <Container maxWidth='md'>



      <Typography mb={4} fontWeight={600}><ArrowBackIcon onClick={() => valuee.setActiveComponent(false)} sx={{ cursor: 'pointer' }} />&nbsp;&nbsp;&nbsp;Payment</Typography>

      <Grid
        justifyContent='center'
        alignItems='center'
        container
        rowGap={2}
        columns={{ xs: 4, md: 5 }}
      >

        <Grid item xs={4}>

          <InputLabel
            id="demo-simple-select-standard-label"
            sx={{ textAlign: "left", fontSize: '20px !important' }}
          >
            Email :
          </InputLabel>

          <TextfieldWrapper name="emailForm" />

        </Grid>

        <Grid item xs={4}>

          <InputLabel
            id="demo-simple-select-standard-label"
            sx={{ textAlign: "left", fontSize: '20px !important' }}
          >
            Country or Region
          </InputLabel>

          <TextfieldWrapper placeholder="1234 1234 1234" name="cardNo" type="number" />


          <Box display='flex' justifyContent='space-between'>

            <TextfieldWrapper type='date' name="dob" />

            <TextfieldWrapper placeholder="CVC" name="cvc" type="number" />

          </Box>
        </Grid>

        <Grid item xs={4}>
          <InputLabel
            id="demo-simple-select-standard-label"
            sx={{ textAlign: "left", fontSize: '20px !important' }}
          >
            Name on card
          </InputLabel>

          <TextfieldWrapper name="cardName" />

        </Grid>


        <Grid item xs={4}>

          <InputLabel
            id="demo-simple-select-standard-label"
            sx={{ textAlign: "left", fontSize: '20px !important' }}
          >
            Country or region
          </InputLabel>


          <SelectWrapper
            name="region"
            // label="Select Your Country"
            options={region}
          />

          <TextfieldWrapper type="number" placeholder="ZIP" name="zipCode" />

        </Grid>



      </Grid>

    </Container >

  )


}

export default Form;