// @flow
import React from "react";

import { FormGroup, Label, Input } from "reactstrap";

type Props = {
  labelText?: string,
  labelDesc?: string,
  options: string[]
};

const Select = (props: Props) => (
  <FormGroup>
    {props.labelText && <Label for={props.labelDesc}>{props.labelText}</Label>}
    <Input type="select" name="select">
      {props.options.map(option => <option key={option}>{option}</option>)}
    </Input>
  </FormGroup>
);

export default Select;
