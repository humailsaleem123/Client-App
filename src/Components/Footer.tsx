import React from 'react'
import { Container, Grid, Typography, Box } from '@mui/material';
import paperPlane from '../Images/paper-plane.png'
import Chat from '../Images/chat.png';
import Telephone from '../Images/telephone.png';


function Footer() {



  return (


    <Container maxWidth={false} sx={{ padding: 2 }}>


      <Grid container
        justifyContent='space-evenly'
        alignItems='center'
        alignContent='center'

        columns={{ xs: 4, md: 6 }}
        sx={{ flexDirection: { xs: 'column', md: 'row' }, textAlignLast: 'center' }}

      >

        <Grid item xs={3} sx={{ textAlignLast: 'auto' }}>

          <Typography variant='h4' textTransform='uppercase' fontWeight={600} mb={1}>

            Here To Help

          </Typography>

          <Typography variant='body2'>

            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt saepe corrupti repellendus cumque est molestias magnam, natus placeat illo ipsam dolorum doloribus deleniti quam voluptate aliquam autem ratione officia quae!

          </Typography>

        </Grid>




        <Grid item xs={1} md={0.5} >

          <img src={Chat} />

          <Typography textAlign='center' variant='body1'>Live Chat</Typography>

        </Grid>



        <Grid item xs={1} md={0.5}>


          <img src={Telephone} />

          <Typography textAlign='center' variant='body1'>02325466</Typography>
        </Grid>


        <Grid item xs={1} md={0.5}>

          <img src={paperPlane} />
          <Typography textAlign='center' variant='body1'>Email Us</Typography>

        </Grid>




      </Grid>





    </Container>




  )


}

export default Footer;