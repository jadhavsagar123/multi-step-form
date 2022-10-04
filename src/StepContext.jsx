import React, { useState } from "react";
import App from "./App";
export const multiStepContext = React.createContext();
const StepContext = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  return (
    <div>
      <multiStepContext.Provider
        value={{ step, setStep, data, setData, finalData, setFinalData }}
      >
        <App />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
