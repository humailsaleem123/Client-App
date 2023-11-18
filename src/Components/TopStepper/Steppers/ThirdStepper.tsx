import { Container, Grid, Typography, Button, Box, Slider, RadioGroup, Chip } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { contextStepper } from '../StepperContext';
import React, { useContext } from 'react'
import StepperStructure from '../StepperStructure';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import RadioButton2 from '../../Fields/Radio2Btn';
import SliderWrapper from '../../Fields/Slider';


function ThirdStepper() {

  const radioOptions = [
    { key: "Get a refund", value: "refund" },
    { key: "Get a gift", value: "gift" },

  ];




  const [radioValue, setRadioValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue((event.target as HTMLInputElement).value);
  };


  const value = useContext(contextStepper);

  return (


    <React.Fragment>

      <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={value.handleBack} />


      <Container maxWidth='xl'>


        <StepperStructure text={"what you will pay and pick your reward"} count={"3."} />

        <Box mb={10} mt={10}>


          <Grid

            container
            justifyContent='center'
            alignItems='flex-start'
            columnGap={10}
            rowGap={5}
            spacing={3}
            columns={{ xs: 4, md: 6 }}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}

          >

            <Grid item xs={5} md={2.8} sx={{ background: '#dfdfdf', borderRadius: '10px', padding: '50px' }}>


              <Typography mb={2} fontWeight={600} variant='h4'>Amount
                &nbsp;&nbsp;
                <Chip sx={{ background: 'rgb(233 213 207)' }} label="$ 100" />
              </Typography>


              <SliderWrapper name="reward" />

              <Typography mt={5} mb={2} fontWeight={600} variant='h4'>Your Reward</Typography>

              <Typography variant='body2'>You can either choose to have your money back or pick a reward of equal worth. Both are subject to you completing the goal. </Typography>

              <Box mt={7}>

                <RadioButton2 name="refundRadios" options={radioOptions} />


              </Box>


            </Grid>

            <Grid item xs={5} md={2} sx={{ background: '#FFEFEB', borderRadius: '10px' }}>

              <Box padding={5}>

                <Typography fontWeight={600} variant='h3' mb={2}>Challenge:</Typography>

                <Typography mb={3} variant='body2'>Challenge Name will go here whatever it may be and however long it may be, I don’t care about the length of it, but I recommend limiting it</Typography>


                <Typography fontWeight={600} variant='h3' mb={2}>Due:</Typography>

                <Typography variant='h4' mb={2}>18th January, 2000</Typography>
                <Typography variant='h4' mb={2}>20 days from now</Typography>


              </Box>
            </Grid>

          </Grid>

        </Box>


        <Button onClick={value.handleComplete}
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
            ? 'Finish'
            : 'Next'}
        </Button>


      </Container>


    </React.Fragment>


  )


}

export default ThirdStepper;