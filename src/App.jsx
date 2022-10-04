import React from "react";
import "./App.css";
import FirstStep from "./Components/FirstStep";
import SecondStep from "./Components/SecondStep";
import ThirdStep from "./Components/ThirdStep";
import FinalStep from "./Components/FinalStep";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext";
import { useContext } from "react";

function App() {
  const {step} = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStep />;
      case 3:
        return <ThirdStep />;
      case 4:
        return <FinalStep />;
    }
  }
  return (
    <>
      <div style={{ marginTop: "60px" }}>
        <div className=" center row col-4 offset-4 container-fluid">
          <div>
            <img
              src="http://res.cloudinary.com/dekbzsyco/image/upload/v1664860088/uifjisiziu3eth0o6ztk.jpg"
              className="center"
              alt="eden"
            />
          </div>
          <div className="center-stepper">
            <Stepper
              style={{ width: "100%", height: "30px" }}
              activeStep={step-1}
              orientation="horizontal"
            >
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
              <Step>
                <StepLabel></StepLabel>
              </Step>
            </Stepper>
          </div>
          {showStep(step)}
        </div>
      </div>
    </>
  );
}

export default App;
