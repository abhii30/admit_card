import React from "react";
import Logo from "./manas.jpeg";
import "./Admit.css";
const Admit = () => {
  return (
    <div className="admitContainer">
      <div className="admitLeft">
        <div className="admitHeader">
          <div className="admitLogo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="admitHead">
            <h1>Admit Card</h1>
          </div>
        </div>
        <div className="admitGroup">
          <h2>Registration No.</h2> <input className="admitInput" type="text" />
        </div>
        <div className="admitGroup">
          <h4>Name: </h4> <input className="admitInput name" type="text" />
        </div>
        <div className="admitGroup">
          <div className="admitGroup">
            <h4>Test Centre: </h4> <input className="admitInput " type="text" />
          </div>
          <div className="admitGroup">
            <h4>Date: </h4> <input className="admitInput" type="text" />
          </div>
          <div className="admitGroup">
            <h4>Time: </h4> <input className="admitInput" type="text" />
          </div>
        </div>
        <div className="admitSign">
          <div className="signCandidate">
            <div className="sign"></div>
            <span className="signText">Signature of applicant</span>
          </div>
          <div className="signInvigilator">
            {" "}
            <div className="sign"></div>
            <span className="signText">Invigilator</span>
          </div>
          <div className="signAuth">
            {" "}
            <div className="sign"></div>
            <span className="signText">
              Auth. Signatory <h4>(Manas Edu. & Research Centre)</h4>
            </span>
          </div>
        </div>
      </div>
      <div className="admitRight">
        <div className="admitClass">
          <h3>Class</h3>
          <span>XI</span>
        </div>
        <div className="admitPhoto"></div>
      </div>
    </div>
  );
};

export default Admit;
