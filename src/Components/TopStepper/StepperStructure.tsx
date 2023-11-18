import { Container, Grid, Typography, Button, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React, { useContext } from 'react'
import { contextStepper } from './StepperContext';


function StepperStructure(props: any) {


  const value = useContext(contextStepper);

  return (

    <React.Fragment>

      {/* <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={value.handleBack} /> */}

      <Box mt={5} mb={5}>

        <Typography variant='h3' textTransform='uppercase' fontWeight={600}>

          <span style={{ background: '#F34E4F', borderRadius: 50 }}>{props.count}</span> {props.text}

        </Typography>
      </Box>

    </React.Fragment>


  )



}

export default StepperStructure;