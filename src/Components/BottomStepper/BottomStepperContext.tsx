import React, { createContext } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const bottomContextStepper = createContext<any>({});




export default function BottomStepperContext(props: any) {

  const steps = ['Describe your goal and reward', 'Confirm your details'];




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
    setActiveStep((prevActiveStep) => prevActiveStep - 1);


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



  const initialState = {
    goal: "",
    dueDate: "",
    reward: "",
    name: "",
    email: "",
    friendName: "",
    friendEmail: "",
    superVisorName: "",
    superVisorEmail: "",

  }




  const handleSubmit = (values: any) => {


    console.log("values", values);

    axios.post("http://localhost:8080/challengefreind",
      {
        dueDate: values.dueDate,
        email: values.email,
        freindEmail: values.friendEmail,
        freindName: values.friendName,
        goal: values.goal,
        name: values.name,
        reward: values.reward,
        superVisorEmail: values.superVisorEmail,
        superVisorName: values.superVisorName

      }
    ).then((res: any) => {
      console.log("nikle lorayyy", res);


    }
    )


  }


  return (


    <bottomContextStepper.Provider

      value={{
        allStepsCompleted,
        activeStep,
        handleBack,
        handleNext,
        completed,
        handleComplete,
        steps,
        completedSteps,
        totalSteps,
        initialState,
        handleStep,
        handleSubmit,


      }}

    >

      {props.children}

    </bottomContextStepper.Provider>

  )

}