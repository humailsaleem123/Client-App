import React, { useContext } from 'react'
import { Container, Grid, Typography, Button, RadioGroup, Box } from '@mui/material';
import { bottomContextStepper } from '../BottomStepperContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Form1 from './Form1';
import Form2 from './Form2';
import SubmitButtonWrapper from '../../Fields/SubmitBtn';
import { useFormikContext } from 'formik';


function SecondStepperBottom() {


  const { submitForm, isValid } = useFormikContext();

  const value = useContext(bottomContextStepper);

  const handleSubmit = () => {

    submitForm();

    if (isValid) {

      value.handleComplete();


    }


  }


  return (



    <Container maxWidth='xl' >

      <Box sx={{ padding: { xs: 0, md: 10 } }}>


        <Form2 />


        <Button onClick={handleSubmit}

          variant='outlined'
          size='large'
          endIcon={<ArrowForwardIcon />}
          sx={{
            marginTop: 35,
            textTransform: 'capitalize',
            '&:hover': {
              backgroundImage: 'linear-gradient(to right, #F16B40, #F33E56)',
              color: '#FFF'
            },

          }}
        >
          {value.completedSteps() === value.totalSteps() - 1
            ? 'Send challenge Request'
            : 'Send challenge Request'}
        </Button>


      </Box>

    </Container>




  )


}


export default SecondStepperBottom;