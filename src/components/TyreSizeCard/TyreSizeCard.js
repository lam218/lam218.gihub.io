//@flow
import React from "react";
import ListGroupLR from "../ListGroupLR";
import Card from "../Card";
import BlackWheel from "../../../public/icons/Wheel-Black";
import OrangeWheel from "../../../public/icons/Wheel-Orange";

type Props = {
  wheelSize: string,
  tyreSize: string
};
type State = {
  isSelected: boolean
};

export default class TyreSizeCard extends React.PureComponent<Props, State> {
  state = {
    isSelected: false
  };
  select() {
    this.setState({
      isSelected: !this.state.isSelected
    });
  }
  render() {
    return (
      <div onClick={() => this.select()}>
        <Card
          className={
            this.state.isSelected ? "tyreSizeCard selected" : "tyreSizeCard"
          }
        >
          <div className="wheelIcon">
            {this.state.isSelected ? <OrangeWheel /> : <BlackWheel />}
          </div>

          <div className="wheelContainer">
            <div className="wheelSize">
              <span>Wheel Size</span>
              <span
                className={
                  this.state.isSelected ? "wheelVar selected" : "wheelVar"
                }
              >
                {this.props.wheelSize}
              </span>
            </div>

            <div className="tyreSize">
              <span>Tyre Size</span>
              <span
                className={
                  this.state.isSelected ? "wheelVar selected" : "wheelVar"
                }
              >
                {this.props.tyreSize}
              </span>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}
