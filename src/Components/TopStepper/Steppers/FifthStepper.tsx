import { Container, Grid, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { contextStepper } from '../StepperContext';
import React, { useContext } from 'react'
import StepperStructure from '../StepperStructure';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccordionComponent from './Accordion';
import { useFormikContext } from 'formik';

function FifthStepper() {


  const value = useContext(contextStepper);

  const { submitForm, isValid } = useFormikContext();

  const handleSubmit = () => {

    submitForm();

    if (isValid) {

      value.handleComplete();


    }


  }


  return (


    <React.Fragment>


      <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={value.handleBack} />

      <Container maxWidth='xl'>

        <StepperStructure text={"Payment Details"} count={"5."} />

        <Box mb={10} mt={10}>

          <Grid

            container
            justifyContent='center'
            alignItems='flex-start'
            rowGap={10}
            columnGap={10}
            columns={{ xs: 4, md: 6 }}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}

          >

            <Grid item xs={5} md={2.8} sx={{ background: '#dfdfdf', borderRadius: '10px', padding: '50px' }}>




              <AccordionComponent />


            </Grid>



            <Grid item xs={5} md={2.5} sx={{ background: '#FFEFEB', borderRadius: '10px' }}>

              <Box padding={5}>

                <Typography fontWeight={600} variant='h3' mb={2}>Challenge:</Typography>

                <Typography mb={4} variant='body2'>Challenge Name will go here whatever it may be and however long it may be, I don’t care about the length of it, but I recommend limiting it</Typography>


                <Typography fontWeight={600} variant='h3' mb={2}>Due:</Typography>

                <Typography variant='h4' mb={2}>18th January, 2000</Typography>
                <Typography variant='h4' mb={2}>20 days from now</Typography>


                <Typography fontWeight={600} variant='h3' mb={2}>Reward:</Typography>

                <Typography variant='h4' mb={2}>
                  http://get-licensed.co.uk/products/door-supervisor-course </Typography>

                <Typography fontWeight={600} variant='h3' mb={2}>Contact Details:</Typography>

                <Typography variant='h4' mb={2}>Challenger: zain@123.com</Typography>
                <Typography variant='h4' mb={2}>Supervisor: zain@zain.com</Typography>


                <Typography fontWeight={600} variant='h3' mb={2}>Payment:</Typography>

                <Typography variant='h4' mb={2}>$100</Typography>


              </Box>
            </Grid>


          </Grid>

        </Box>

        <Button onClick={handleSubmit}
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
            ? 'Complete Payment'
            : 'Next'}
        </Button>


      </Container>

    </React.Fragment>


  )
}

export default FifthStepper