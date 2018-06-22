import React from "react";

import Card from "../Card";

import Wheel from "../../../public/icons/Wheel-Orange.js";

const WheelCard = (props: Props) => (
  <Card className="wheelCard">
    <div className="leftCard">
      <Wheel />
      <p>Tyre Size</p>
      <h2>{props.tyreSize}</h2>
    </div>
    <div className="rightCard">
      <h2>Where do we get this data?</h2>
      <p>we get it from places and also things.</p>
    </div>
  </Card>
);
export default WheelCard;
