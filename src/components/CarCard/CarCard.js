//@flow
import React from "react";

import { Card } from "reactstrap";
import ListGroupLR from "../ListGroupLR";

type Props = {
  carImg?: string,
  carDesc?: string,
  carList: [{ right: string, left: string }],
  lines?: boolean
};

const CarCard = (props: Props) => (
  <Card className="carCard" imgUrl={props.carImg} imgDesc={props.carDesc}>
    <ListGroupLR List={props.carList} lines />
  </Card>
);

export default CarCard;
