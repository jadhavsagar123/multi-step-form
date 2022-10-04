import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../App.css";

const FirstStep = () => {
  const {data, setStep,setData} = useContext(multiStepContext);
  return (
    <div>
      <div>
        <h3>
          <strong> Welcome! First things first...</strong>
        </h3>
        <p> you can always change them later.</p>
      </div>
      <form style={{ textAlign: "left" }}>
        <div>
          <label htmlFor="full-name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="full-name"
            placeholder="Steve jobs"
            onChange={(e)=>setData({...data,"fullname":e.target.value})}
          />{" "}
          <br />
        </div>
        <div className="form-group">
          <label className="control-label" htmlFor="display-name">
            Display Name
          </label>
          <input
            type="text"
            className="form-control"
            id="display-name"
            placeholder="Steve"
            onChange={(e)=>setData({...data,"displayname":e.target.value})}
          />
        </div>{" "}
        <br />
        <div>
          <button
            style={{ backgroundColor: "#5732a8",width:"100%" }}
            className="btn btn-primary button
"
            onClick={()=>setStep(2)}
          >
            Create Workspace
          </button>
        </div>
      </form>
    </div>
  );
};

export default FirstStep;
