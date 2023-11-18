import React, { useContext } from 'react'
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import { Typography, Container } from '@mui/material';
import { contextStepper } from './StepperContext';
import Box from '@mui/material/Box';
import FirstStepper from './Steppers/FirstStepper';
import SecondStepper from './Steppers/SecondStepper';
import ThirdStepper from './Steppers/ThirdStepper';
import FourthStepper from './Steppers/FourthStepper';
import FifthStepper from './Steppers/FifthStepper';
import LastStepper from './Steppers/LastStepper';
import { Form, Formik } from 'formik';
import * as Yup from "yup";

function StepperForm() {


  const value = useContext(contextStepper);


  const formValidation = Yup.object().shape({

    message: Yup.string()
      .max(15, "*Must be 15 characters or less")
      .required("*Required"),

    radios: Yup.string()
      .required("*Required"),

    reward: Yup.string()
      .required("*Required"),


    yourEmail: Yup.string().email("Invalid email address").required("*Required"),

    refundRadios: Yup.string()
      .required("*Required"),


    yourSuperEmail: Yup.string().email("Invalid email address").required("*Required"),

    superVisorName: Yup.string()
      .required("*Required"),

    cardNo: Yup.number()
      .required("*Required"),

    emailForm: Yup.string().email("Invalid email address").required("*Required"),

    dob: Yup.string()
      .required("*Required"),

    cvc: Yup.number()
      .required("*Required"),

    cardName: Yup.string()
      .required("*Required"),

    region: Yup.string()
      .required("*Required"),


    zipCode: Yup.number()
      .required("*Required"),



  });



  return (

    <Container className='graph-content-bg' maxWidth={false}>

      <Container maxWidth={false} sx={{ background: "#FFF", borderRadius: 5, padding: 5, maxWidth: '1700px' }}>

        <Formik

          initialValues={{ ...value.initialState }}
          // validationSchema={formValidation}
          validateOnMount
          enableReinitialize={true}
          onSubmit={(values) => {
            console.log(values);
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

                  <LastStepper />


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
                      <FirstStepper />

                    </React.Fragment>



                  )
                  :

                  (value.activeStep === 1)
                    ?
                    (
                      <React.Fragment>
                        <SecondStepper />

                      </React.Fragment>



                    )

                    :

                    (value.activeStep === 2)
                      ?
                      (
                        <React.Fragment>

                          <ThirdStepper />

                        </React.Fragment>



                      )
                      :
                      (value.activeStep === 3)
                        ?
                        (
                          <React.Fragment>

                            <FourthStepper />

                          </React.Fragment>



                        )
                        :
                        (
                          <React.Fragment>

                            <FifthStepper />

                          </React.Fragment>



                        )

            }

          </Form>

        </Formik>

      </Container>

    </Container>


  )


}

export default StepperForm;