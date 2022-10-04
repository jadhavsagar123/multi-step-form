import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";

const FinalStep = () => {
  const { data } = useContext(multiStepContext);
  return (
    <div className="container-fluid">
      <img
        src="http://res.cloudinary.com/dekbzsyco/image/upload/v1664875102/avhgydpjoanr5xoozcig.png"
        alt="icon"
      />
      <h3>
        <strong>Congratulations,{data.displayname}!</strong>
      </h3>
      <p>You have completed onboarding,you can start using Eden!</p>
      <button
        style={{ backgroundColor: "#5732a8", width: "100%" }}
        className="btn btn-primary btn-block"
      >
        Launch Eden
      </button>
    </div>
  );
};

export default FinalStep;
