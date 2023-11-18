import { Container, Grid, Typography, Chip, Slider } from '@mui/material';
import React from 'react'
import TextBoxWrapper from '../../Fields/TextBox';
import TextfieldWrapper from '../../Fields/TextField';
import SliderWrapper from '../../Fields/Slider';

function Form1() {


  return (




    <Grid
      container
      rowGap={4}
      columns={{ xs: 2, md: 2 }}
    >

      <Grid item xs={4}>

        <Typography fontWeight={600} variant='h3'>
          Describe your goal
        </Typography>

        <TextBoxWrapper name='goal' />

      </Grid>


      <Grid item xs={4}>


        <Typography fontWeight={600} variant='h3'>
          Set a due date
        </Typography>

        <TextfieldWrapper name='dueDate' type='date' />

      </Grid>



      <Grid item xs={4}>

        <Typography fontWeight={600} variant='h3'>
          Set a reward  <Chip sx={{ background: 'rgb(233 213 207)' }} label="$ 100" />
        </Typography>

        <SliderWrapper name='reward' />

        {/* <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" /> */}

      </Grid>


    </Grid>


  )


}

export default Form1;