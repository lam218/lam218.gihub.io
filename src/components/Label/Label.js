// @flow
import * as React from "react";

import { Label } from "reactstrap";
import "./Label.css";

type Props = {
  for: string,
  className?: string,
  labelText: string,
  children: React.Node
};

const ourLabel = (props: Props) => (
  <Label for={props.for} className={props.className}>
    <span className={"label"}>{props.labelText}</span>
    {props.children}
  </Label>
);

export default ourLabel;
