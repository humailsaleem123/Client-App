import React, { useContext } from 'react'
import { Container, Grid, Typography, Button, RadioGroup, Box } from '@mui/material';
import { bottomContextStepper } from '../BottomStepperContext';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Form1 from './Form1';

function FirstStepperBottom() {

  const value = useContext(bottomContextStepper);

  return (


    <Container maxWidth='xl' >

      <Box sx={{ padding: { xs: 0, md: 10 } }}>

        <Form1 />



        <Button onClick={value.handleComplete}

          variant='outlined'
          size='large'
          endIcon={<ArrowForwardIcon />}
          sx={{
            marginTop: 5,
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

      </Box>

    </Container>

  )


}

export default FirstStepperBottom;