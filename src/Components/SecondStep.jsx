import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import "./SecondStep.css"

const SecondStep = () => {
  const { setStep, data, setData } = useContext(multiStepContext);
  return (
    <div className="container-fluid">
      <h3>
        <strong>Let's set up a home for all your work</strong>
      </h3>
      <p style={{ textAlign: "center" }}>
        {" "}
        you can always another workplace later.
      </p>
      <form style={{ textAlign: "left" }}>
        <div className="form-group">
          <label htmlFor="workspace name">Workspace Name</label>
          <input
            type="text"
            className="form-control"
            id="workspace name"
            placeholder="Eden"
            onChange={(e)=>setData({...data,"workspacename":e.target.value})}
          />{" "}
          <br />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="workspace url">
            Workspace URL <small style={{ opacity: "0.5" }}>(optional)</small>
          </label>
          <div className="input">
          <input
            type="text"
            style={{ width: "40%" }}
            className="form-control"
            placeholder="www.Eden.com/"
            disabled={true}
            onChange={(e)=>setData({...data,"workspace url":e.target.value})}
          />
          <input
            type="text"
            className="form-control"
            id="workspace url"
            placeholder="Example"
            style={{ width: "60%",display:"inline"}}
          />
          </div>
        </div>{" "}
        <br />
        <div>
          <button
            style={{ backgroundColor: "#5732a8", width: "100%" }}
            className="btn btn-primary
"
            onClick={()=>setStep(3)}
          >
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecondStep;
