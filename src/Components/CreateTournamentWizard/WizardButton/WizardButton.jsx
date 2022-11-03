import React, { useState } from "react";

import ProgressBar from 'react-bootstrap/ProgressBar';


const WizardButton = (props) => {

    const { bgcolor, completed } = props;

    function ProgressBar() {
        return (
          <div className="progressBarWrp">
            <div className="progressBarFiller" style={{width: `${completed}%`}}>
            </div>
          </div>
        );
      };
  return (
    <>
        <div className="btnWrp">
            {ProgressBar()}
            <div>
            <button className="btn btn-primary backBtn" onClick={props.previousStep}>Back</button>
            <button onClick={props.nextStep} className="btn btn-primary nextBtn">
                Next
            </button>
            </div>
        </div>
    </>
  );
};

export default WizardButton;