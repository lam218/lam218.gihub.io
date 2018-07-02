//@flow
import React from "react";

import Card from "../Card";
import ListGroupLR from "../ListGroupLR";

type Props = {
  carImg?: string,
  carDesc?: string,
  carList: [{ right: string, left: string }],
  horizontalImg?: boolean
};

const CarCard = (props: Props) => (
  <div>
    {props.horizontalImg ? (
      <Card className="horizontal carCard" bodyClassName="bodyCarCard">
        <img src={props.carImg} alt={props.carDesc} />
        <ListGroupLR List={props.carList} lines />
      </Card>
    ) : (
      <Card className="carCard" imgUrl={props.carImg} imgDesc={props.carDesc}>
        <ListGroupLR List={props.carList} lines />
      </Card>
    )}
  </div>
);

export default CarCard;
