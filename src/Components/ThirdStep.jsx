import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import "./ThirdStep.css";
const ThirdStep = () => {
  const { setStep} = useContext(multiStepContext);
  return (
    <div className="container-fluid">
      <h3>
        <strong>How are you planning to use Eden?</strong>
      </h3>
      <p style={{ textAlign: "center" }}>
        we'll streamline your setup experience accordingly.
      </p>
      <div className="select_create">
        <div className="icon1">
          <img
            src="http://res.cloudinary.com/dekbzsyco/image/upload/v1664872351/omc3amd7ba3p9ye1keus.png"
            alt="icon"
          />
          <p>
            {" "}
            <strong>For myself</strong>
          </p>
          <p>Write better.think more clearly.Stay organized</p>
        </div>

        <div className="icon2">
          <img
            src="http://res.cloudinary.com/dekbzsyco/image/upload/v1664872363/tba99g5wgd0acenrmoj8.png"
            alt="icon"
          />
          <p>
            {" "}
            <strong>With my team</strong>
          </p>
          <p>Wikis,docs task &#38; projects all in one place</p>
        </div>
      </div>
      <button
        style={{ backgroundColor: "#5732a8", width: "100%" }}
        className="btn btn-primary
"
        onClick={() => setStep(4)}
      >
        Create Workspace
      </button>
    </div>
  );
};

export default ThirdStep;
