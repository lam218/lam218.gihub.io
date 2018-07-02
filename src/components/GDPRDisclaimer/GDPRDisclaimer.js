import React from "react";
import QuestionMarkGrey from "../../../public/icons/Info-Grey";
import QuestionMarkBlack from "../../../public/icons/Info-Black";
import ArrowDown from "../../../public/icons/Arrow-Down";

export default class GDPRDisclaimer extends React.PureComponent {
  state = {
    visibleDropdown: false
  };
  render() {
    return (
      <div className="GDPR">
        <div
          className="GDPRMobile"
          onClick={() =>
            this.setState({ visibleDropdown: !this.state.visibleDropdown })
          }
        >
          <div className="GDPRHeader">
            <div className="greyQ">
              <QuestionMarkGrey />
            </div>
            <div className="blackQ">
              <QuestionMarkBlack />
            </div>
            <h4>Where do we get this data from?</h4> <ArrowDown />
          </div>
          {this.state.visibleDropdown && (
            <p className="GDPRPara">we get it from places and also things.</p>
          )}
        </div>
        <div className="GDPRDesktop">
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
      </div>
    );
  }
}
