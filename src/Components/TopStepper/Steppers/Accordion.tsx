import React, { useContext } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Container, Grid, Typography, Button, Box, Avatar } from '@mui/material';
import visa from '../../../Images/Payment Icons/visa.png';
import masterCard from '../../../Images/Payment Icons/masterCard.png';
import express from '../../../Images/Payment Icons/express.png';
import discover from '../../../Images/Payment Icons/discover.png';
import coinBase from '../../../Images/Payment Icons/coinBase.png';
import applePay from '../../../Images/Payment Icons/applePay.png';
import Form from './Form';
import { contextStepper } from '../StepperContext';


function AccordionComponent() { 


  const valuee = useContext(contextStepper);



  return (

    <React.Fragment>


      {(valuee.activeComponent === false)

        ?


        (
          <React.Fragment>

            <Typography mb={2} variant='h3' fontWeight={600}>Choose your payment method</Typography>


            <Typography mb={4} variant='body2' >

              You can either choose to have your money back or pick a reward of equal worth. Both are subject to you completing the goal.
            </Typography>

            <Button
              endIcon={
                <ArrowForwardIosIcon />
              }
              fullWidth
              sx={{
                display: 'flex', justifyContent: 'space-between',
                textTransform: 'none', alignItems: 'center', color: '#000', padding: 2, background: '#FFF',
                flexDirection: { xs: 'column', md: 'row' }, marginBottom: 2, rowGap: 2, columnGap: 0
              }}
              autoCapitalize="none"
              onClick={() => valuee.setActiveComponent(true)}

            >

              <Typography variant='h4' >

                Pay with a card

              </Typography>

              <Box display='flex' gap={2}>

                <img width='30px' src={visa} />
                <img width='30px' src={masterCard} />
                <img width='30px' src={express} />
                <img width='30px' src={discover} />

              </Box>

            </Button>

            <Button

              endIcon={<ArrowForwardIosIcon />}
              fullWidth
              sx={{
                display: 'flex', justifyContent: 'space-between',
                textTransform: 'none', alignItems: 'center', color: '#000', padding: 2, background: '#FFF',
                flexDirection: { xs: 'column', md: 'row' }, marginBottom: 2, rowGap: 2, columnGap: 0
              }}
              autoCapitalize="none"
            >

              <Typography variant='h4'>

                Pay in crypto
              </Typography>

              <Box display='flex' gap={0}>

                <img width='80px' src={coinBase} />

              </Box>

            </Button>

            <Button

              endIcon={<ArrowForwardIosIcon />}
              fullWidth
              sx={{
                display: 'flex', justifyContent: 'space-between',
                textTransform: 'none', alignItems: 'center', color: '#000', padding: 2, background: '#FFF',
                flexDirection: { xs: 'column', md: 'row' }, marginBottom: 2
              }}
              autoCapitalize="none"
            >

              <Typography variant='h4' display='flex' alignItems='center' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>

                Pay with Paypal

              </Typography>

            </Button>

            <Button

              // endIcon={<ArrowForwardIosIcon />}
              fullWidth
              sx={{
                display: 'flex', justifyContent: 'flex-start',
                textTransform: 'none', alignItems: 'center', color: '#000', padding: 2, background: '#FFF',
                flexDirection: { xs: 'column', md: 'row' }, marginBottom: 2, columnGap: 11, rowGap: 2
              }}
              autoCapitalize="none"
            >

              <Typography variant='h4' display='flex' alignItems='center' sx={{ flexDirection: { xs: 'column', md: 'row' } }}>

                Pay with Apple Pay




              </Typography>

              <img width='50px' src={applePay} />


            </Button>

          </React.Fragment>

        )
        :

        (

          <React.Fragment>
            <Form />
          </React.Fragment>

        )


      }



    </React.Fragment>
  )


}

export default AccordionComponent;