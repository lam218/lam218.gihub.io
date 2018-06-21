// @flow
import React from "react";

import { FormGroup, Label, Input } from "reactstrap";

type Props = {
  name: string,
  radioButtons: [{ text: string, isDisabled: boolean }]
};
const Radio = (props: Props) => (
  <FormGroup>
    {props.radioButtons.map((radio, i) => (
      <FormGroup check key={i}>
        <div className="radio-item">
          <Label check>
            <Input
              type="radio"
              name={props.name}
              disabled={radio.isDisabled ? true : false}
            />
            <span className="radioLabel">{radio.text}</span>
          </Label>
        </div>
      </FormGroup>
    ))}
  </FormGroup>
);

export default Radio;
