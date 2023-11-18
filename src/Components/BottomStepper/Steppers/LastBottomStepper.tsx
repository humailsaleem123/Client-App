import React from 'react'
import { Container, Grid, Typography, Button, Box } from '@mui/material';
import emailIcon from '../../../Images/email.png';
import Arrows from '../../../Images/Moving-arrows.png';

function LastBottomStepper() {

  const [timeComponent, setTimeComponent] = React.useState<boolean>(false);



  React.useEffect(() => {

    setTimeout(() => {

      setTimeComponent(true);


    }, 2000)




  }, [])


  return (

    <React.Fragment>

      {timeComponent === true ?

        (
          <Container maxWidth={false}>

            <Grid
              container
              justifyContent='center'
              alignItems='center'
              columns={{ xs: 4, md: 8.5 }}
              spacing={10}
              minHeight={"100vh"}
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



            </Grid>




          </Container>


        )
        :

        (

          <Container maxWidth='md'>

            <Box minHeight="80vh" display='flex' flexDirection={'column'} justifyContent='center' alignItems='center'>

              <img src={Arrows} />

              <Typography fontWeight={600} variant='h3'>Creating your challenge request</Typography>



            </Box>




          </Container>

        )
      }


    </React.Fragment>

  )


}

export default LastBottomStepper;