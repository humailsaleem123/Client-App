import { useState } from 'react'
import './App.css'
import FirstContent from './Components/FirstContent/FirstContent'
import FourthContent from './Components/FourthContent/FourthContent'
import Footer from './Components/Footer'
import { Routes, Route } from 'react-router-dom';
import StepperForm from './Components/TopStepper/StepperForm'
import StepperContext from './Components/TopStepper/StepperContext'
import BottomStepperContext from './Components/BottomStepper/BottomStepperContext'
import FirstSlider from './Components/SecondContent/FirstSlider'
import "bootstrap/dist/css/bootstrap.css";
import SecondSlider from './Components/ThirdContent/SecondSlider'
import BottomStepperForm from './Components/BottomStepper/BottomStepperForm'


function App() {

  return (
    <div className="App">

      <Routes>

        <Route path='/' element={<> <FirstContent /> <FirstSlider /> <SecondSlider />  <FourthContent />
          <Footer /></>} />

        <Route path='/challenge'
          element={
            <>
              <StepperContext>
                <StepperForm />

                <FirstSlider />

                <SecondSlider />

                <FourthContent />

                <Footer />

              </StepperContext>
            </>
          } />

        <Route path='/challengeFriend'
          element={
            <>
              <BottomStepperContext>

                <BottomStepperForm />

              </BottomStepperContext>
            </>
          } />



      </Routes>



    </div>
  )
}

export default App;
