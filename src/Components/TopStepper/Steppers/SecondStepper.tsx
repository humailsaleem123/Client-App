import { Container, Grid, Typography, Button, Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { contextStepper } from '../StepperContext';
import React, { useContext } from 'react'
import StepperStructure from '../StepperStructure';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from '@mui/styles'
import CalendarWrapper from '../../Fields/Calendar';

const useStyles = makeStyles((theme: any) => ({
  dateCalendar: {

    // Add your custom styles here to change the size
    // For example:
    width: '700px !important',
    height: '600px',
    [theme.breakpoints.down("sm")]: {
      width: '350px !important',
      height: 'auto'
    },
    [theme.breakpoints.down("md")]: {
      width: '500px',
      height: 'auto'
    }
  },
}
));

function SecondStepper() {
  const value = useContext(contextStepper);

  const classes = useStyles();

  return (


    <React.Fragment>

      <ArrowBackIcon sx={{ cursor: 'pointer' }} onClick={value.handleBack} />

      <Container maxWidth='xl'>

        <StepperStructure text={"No Challenges Work without a deadline"} count={"2."} />


        <Box mb={20} mt={7}>

          <Grid

            container
            justifyContent='center'
            alignItems='flex-start'
            spacing={1}
            rowGap={5}
            columnGap={15}
            columns={{ xs: 4, md: 10, lg: 10, xl: 10 }}
            sx={{ flexDirection: { xs: 'column', md: 'row' } }}

          >

            <Grid item xs={5} md={9} lg={7} xl={5} sx={{ background: '#dfdfdf', borderRadius: '10px' }}>


              {/* <CalendarWrapper name="date" /> */}

              <LocalizationProvider dateAdapter={AdapterDayjs} >

                <DateCalendar

                  defaultValue={dayjs('2023-04-17')}
                  views={['year', 'month', 'day']}
                  classes={{ root: classes.dateCalendar }}
                />

              </LocalizationProvider>

            </Grid>

            <Grid item xs={4} sx={{ background: '#FFEFEB', borderRadius: '10px' }}>

              <Box padding={5}>

                <Typography fontWeight={600} variant='h3' mb={2}>Challenge:</Typography>

                <Typography variant='body2'>Challenge Name will go here whatever it may be and however long it may be, I don’t care about the length of it, but I recommend limiting it</Typography>

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

export default SecondStepper;