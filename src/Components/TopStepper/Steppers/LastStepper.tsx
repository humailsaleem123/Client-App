import React from 'react'
import { Container, Grid, Typography, Button } from '@mui/material';
import emailIcon from '../../../Images/email.png';
import './Steppers.css';

function LastStepper() {


  return (



    <Container maxWidth={false}>

      <Grid
        container
        justifyContent='center'
        alignItems='center'
        columns={{ xs: 4, md: 15 }}
        spacing={10}
        sx={{ flexDirection: 'column' }}
      >

        <Grid item xs={5}>
          <Typography textAlign='center' textTransform='uppercase' variant='h2' sx={{ mt: 2, mb: 1 }} fontWeight={700}>

            Check Your Email

          </Typography>



          <Typography variant='body2' textAlign='center'>

            A receipt of your payment has been sent to your provided
            email address along with the instructions to proceed further with the challenge.


          </Typography>

        </Grid>


        <Grid item xs={4}>

          <img className='email-icon' src={emailIcon} />

        </Grid>


        <Grid item xs={4}>

          <Button variant='outlined'

            sx={{

              textTransform: 'capitalize',
              '&:hover': {
                backgroundImage: 'linear-gradient(to right, #F16B40, #F33E56)',
                color: '#FFF'
              },

            }}

          >Continue Browsing</Button>

        </Grid>

      </Grid>




    </Container>


  )


}

export default LastStepper;