import React from "react";
import QuestionMarkGrey from "../../../public/icons/Info-Grey";
import QuestionMarkBlack from "../../../public/icons/Info-Black";

const GDPRDisclaimer = () => (
  <div className="GDPR">
    <div className="GDPRHeader">
      <div className="greyQ">
        <QuestionMarkGrey />
      </div>
      <div className="blackQ">
        <QuestionMarkBlack />
      </div>

      <h4>Where do we get this data from?</h4>
    </div>

    <p className="GDPRPara">we get it from places and also things.</p>
  </div>
);

export default GDPRDisclaimer;
