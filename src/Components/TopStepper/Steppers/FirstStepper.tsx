import { Container, Grid, Typography, Button, RadioGroup, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { contextStepper } from '../StepperContext';
import React, { useContext } from 'react'
import StepperStructure from '../StepperStructure';
import RadioButton from '../../Fields/RadioBtn';
import TextBoxWrapper from '../../Fields/TextBox';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function FirstStepper() {


  const value = useContext(contextStepper);


  const radioOptions = [
    { key: "Lose 400 Kgs", value: "400" },
    { key: "Lose 500 Kgs", value: "500" },
    { key: "Lose 300 Kgs", value: "300" },
    { key: "Lose 100 Kgs", value: "100" },
  ];



  return (

    <React.Fragment>

      <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={value.handleBack} />

      <Container maxWidth='xl'>

        <StepperStructure text={"Start With A Goal"} count={"1."} />

        <Box display='flex' justifyContent='center' mb={10} gap={7} sx={{ flexDirection: { xs: 'column', sm: 'column', md: 'column', lg: 'row' } }}>

          <Container disableGutters maxWidth='md' sx={{ background: '#e9e9e9', padding: '50px', border: '1px solid #999999' }}>


            <Container maxWidth={false} sx={{ maxWidth: '700px' }}>

              <Typography fontWeight={600} variant='h3'>Pick One From ???</Typography>
            </Container>

            <Grid
              mt={5}
              container
              justifyContent='center'
              alignItems='center'
              spacing={0}
              padding={0}
              columnGap={3}
              rowGap={3}
              columns={{ xs: 4, md: 9 }}
              sx={{ flexDirection: { xs: 'column', md: 'row' } }}

            >




              <RadioButton name="radios" options={radioOptions} />


            </Grid>

            {/* <Button
        color="inherit"
        onClick={value.handleBack}
        sx={{ mr: 1 }}
      >
        Back
      </Button> */}

            {/* <Button onClick={value.handleNext} sx={{ mr: 1 }}>
        Next
      </Button> */}

          </Container>


          <Container maxWidth='md' sx={{ background: '#e9e9e9', padding: '50px', border: '1px solid #999999' }}>

            <Typography fontWeight={600} variant='h3'>Let us know your goal</Typography>


            <TextBoxWrapper
              name='message' />


          </Container>



        </Box>

        <Button onClick={value.handleComplete}
          variant='outlined'
          size='large'
          endIcon={<ArrowForwardIcon />}
          sx={{

            textTransform: 'capitalize',
            '&:hover': {
              backgroundImage: 'linear-gradient(to right, #F16B40, #F33E56)',
              color: '#FFF'
            },

          }}
        >
          {value.completedSteps() === value.totalSteps() - 1
            ? 'Finish'
            : 'Next'}
        </Button>

      </Container>



    </React.Fragment >
  )



}

export default FirstStepper;