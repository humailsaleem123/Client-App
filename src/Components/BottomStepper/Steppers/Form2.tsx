import React from 'react'
import { Container, Grid, Typography, Button, RadioGroup, Box } from '@mui/material';
import Textfield2Wrapper from '../../Fields/TextField2';


function Form2() {


  return (


    <Grid
      container
      justifyContent='center'
      rowGap={5}
      columns={{ xs: 4, md: 4 }}
    >

      <Grid item xs={4}>

        <Typography fontWeight={600} variant='h3'>
          Your details
        </Typography>

        <Box display='flex' gap={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>

          <Textfield2Wrapper placeholder="Your name" name="name" />


          <Textfield2Wrapper placeholder="Your email address" name="email" />


        </Box>



      </Grid>



      <Grid item xs={4}>

        <Typography fontWeight={600} variant='h3'>
          Your friend's details
        </Typography>

        <Box display='flex' gap={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>

          <Textfield2Wrapper placeholder="Friend's name" name="friendName" />


          <Textfield2Wrapper placeholder="Your friend's email address" name="friendEmail" />


        </Box>



      </Grid>


      <Grid item xs={4}>

        <Typography fontWeight={600} variant='h3'>
          Your supervisor's details
        </Typography>

        <Box display='flex' gap={2} sx={{ flexDirection: { xs: 'column', md: 'row' } }}>

          <Textfield2Wrapper placeholder="Supervisor's name" name="superVisorName" />


          <Textfield2Wrapper placeholder="Your supervisor's email address" name="superVisorEmail" />


        </Box>



      </Grid>

    </Grid>



  )



}



export default Form2