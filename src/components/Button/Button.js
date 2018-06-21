// @flow
import * as React from "react";
import { Button } from "reactstrap";
import "./Button.css";

type Props = {
  primary?: boolean,
  secondary?: boolean,
  noBack?: boolean,
  success?: boolean,
  onClick: (event: any) => void,
  disabled?: boolean,
  className?: string,
  children: string
};

const ourButton = (props: Props) => (
  <Button
    className={`button ${props.className ? props.className : ""}
      ${
        props.primary
          ? "primary"
          : props.secondary
            ? "secondary"
            : props.success
              ? "success"
              : props.noBack
                ? "irreversible"
                : "tertiary"
      }`}
    onClick={e => props.onClick(e)}
    disabled={props.disabled}
  >
    {props.children}
  </Button>
);

export default ourButton;
