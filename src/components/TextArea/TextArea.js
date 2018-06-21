import React from "react";

import { FormGroup, Input, Label } from "reactstrap";

type Props = {
  value: string,
  onChange: (e, key) => void,
  key: string,
  className?: string,
  label?: string,
  disabled?: boolean,
  placeholder?: string,
  maxHeight?: string,
  labelDesc?: string
};
const TextArea = (props: Props) => (
  <FormGroup>
    {props.label && <Label for={props.labelDesc}>{props.label}</Label>}
    <Input
      type="textarea"
      name="text"
      value={props.value}
      onChange={e => props.onChange(e, props.key)}
      disabled={props.disabled}
      placeholder={props.placeholder}
      className={props.className}
      style={{ maxHeight: props.maxHeight }}
    />
  </FormGroup>
);

export default TextArea;
