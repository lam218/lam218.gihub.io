// @flow
import React from "react";

import { Input } from "reactstrap";

type Props = {
  type: string,
  placeholder: string,
  disabled?: boolean,
  value: string,
  onChange: (e: any, key: string) => void,
  key: string,
  className?: string
};

const ourInput = (props: Props) => (
  <Input
    type={props.type}
    placeholder={props.placeholder}
    value={props.value}
    disabled={props.disabled}
    onChange={e => props.onChange(e, props.key)}
    className={props.className ? `input ${props.className}` : "input"}
  />
);

export default ourInput;
