import React, { useContext } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import { Typography, Container, LinearProgress } from '@mui/material';
import { bottomContextStepper } from './BottomStepperContext';
import Box from '@mui/material/Box';
import { Form, Formik } from 'formik';
import FirstStepperBottom from './Steppers/FirstStepperBottom';
import StepperImg from '../../Images/bottomStepperImg.png';
import './BottomStepper.css';
import SecondStepperBottom from './Steppers/SecondStepperBottom';
import LastStepper from '../TopStepper/Steppers/LastStepper';
import LastBottomStepper from './Steppers/LastBottomStepper';
import { makeStyles } from '@mui/styles';
import * as Yup from "yup";
import ProgessBar from './ProgessBar';


const useStyles = makeStyles((theme: any) => ({

  btmStepperImg: {
    width: '-webkit-fill-available',
    height: '-webkit-fill-available',
    // width: '45rem',
    // float: 'right',
    // borderRadius: '0px 18px 18px 0px',
    // [theme.breakpoints.down("sm")]: {
    //   width: '28.2rem',
    // }
  },

}
))

function BottomStepperForm() {

  const classes = useStyles();



  const value = useContext(bottomContextStepper);


  const formValidation = Yup.object().shape({
    goal: Yup.string()
      .max(15, "*Must be 15 characters or less")
      .required("*Required"),

    dueDate: Yup.string()
      .required("*Required"),

    name: Yup.string()
      .required("*Required"),


    email: Yup.string().email("Invalid email address").required("*Required"),

    friendName: Yup.string()
      .required("*Required"),


    friendEmail: Yup.string().email("Invalid email address").required("*Required"),

    superVisorName: Yup.string()
      .required("*Required"),

    reward: Yup.number()
      .required("*Required"),


    superVisorEmail: Yup.string().email("Invalid email address").required("*Required"),

  });


  return (



    <Container className='graph-content-bg2' maxWidth={false}>


      <Container maxWidth={false} style={{ padding: 0 }} sx={{ background: "#FFF", borderRadius: 5, maxWidth: '1700px' }}>



        <Box display='flex'
          sx={{ flexDirection: { xs: 'column', md: 'row', lg: 'row' } }}
        >



          <Container maxWidth={false} sx={{ padding: '0px !important', width: { xs: '100%', md: '123%' } }}>

            <ProgessBar value={value.activeStep * 50} />

            {/* <LinearProgress variant="determinate" value={value.activeStep * 50} /> */}


            <Stepper nonLinear activeStep={value.activeStep}
              sx={{
                marginBottom: { xs: 4 }, padding: 5, background: '#F8F8F8',
                display: 'flex', justifyContent: 'space-around'
              }}

            >
              {value.steps.map((label: any, index: any) => (
                <Step key={label} completed={value.completed[index]}>
                  <StepButton color="inherit" onClick={value.handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>


            <Container maxWidth={false}>

              <Formik

                initialValues={{ ...value.initialState }}
                validationSchema={formValidation}
                validateOnMount
                enableReinitialize={true}
                onSubmit={(values) => {
                  console.log(values);
                  value.handleSubmit(values);
                  // resetForm({values:''});

                  // actions.resetForm({
                  //   values: {
                  //     // the type of `values` inferred to be Blog
                  //     title: '',
                  //     image: '',
                  //     body: '',
                  //   },

                  // });
                  // console.log("dadada" ,values.name)
                }}

              >






                <Form>


                  {
                    value.allStepsCompleted() ? (


                      <React.Fragment>


                        <LastBottomStepper />

                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                          <Box sx={{ flex: '1 1 auto' }} />
                          {/* <Button onClick={value.handleReset}>Reset</Button> */}
                        </Box>
                      </React.Fragment>


                    ) :
                      (value.activeStep === 0)
                        ?
                        (
                          <React.Fragment>

                            <FirstStepperBottom />

                          </React.Fragment>



                        )
                        :

                        (value.activeStep === 1)
                          ?
                          (
                            <React.Fragment>

                              <SecondStepperBottom />

                            </React.Fragment>



                          )
                          :
                          (
                            <React.Fragment>

                              <FirstStepperBottom />

                            </React.Fragment>



                          )

                  }


                </Form>


              </Formik>

            </Container>

          </Container>




          <Container maxWidth={false} style={{ padding: 0 }}>

            <img className={classes.btmStepperImg} src={StepperImg} />


          </Container>

        </Box>

      </Container >


    </Container >

  )


}

export default BottomStepperForm;