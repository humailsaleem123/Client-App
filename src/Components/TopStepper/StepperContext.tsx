import React, { createContext } from "react"
import { useNavigate } from "react-router-dom";



export const contextStepper = createContext<any>({});


export default function StepperContext(props: any) {

  const navigate = useNavigate();


  const [activeComponent, setActiveComponent] = React.useState<boolean>(false);


  const steps = ['1', '2', '3', '4', '5'];


  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<any | null>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {

    if (activeStep === 0) {

      navigate("/");

    }
    else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    }

  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed as any;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };


  const initialState = {
    radios: "",
    message: "",
    // date: "",
    reward: "",
    refundRadios: "",
    yourEmail: "",
    yourSuperEmail: "",
    emailForm: "",
    cardNo: "",
    dob: "",
    cvc: "",
    cardName: "",
    region: "",
    zipCode: ""

  }




  return (


    <contextStepper.Provider

      value={{

        allStepsCompleted,
        handleReset,
        activeStep,
        handleBack,
        handleNext,
        completed,
        handleComplete,
        steps,
        completedSteps,
        totalSteps,
        initialState,
        activeComponent,
        setActiveComponent,

      }}

    >

      {props.children}

    </contextStepper.Provider>

  )


}