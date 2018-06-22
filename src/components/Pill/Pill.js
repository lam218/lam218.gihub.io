// @flow
import React from "react";

import Close from "../../../public/icons/Cross-Red";

type Props = {
  pillText: string,
  removePill: (text: string, pillKey?: string) => void,
  pillKey?: string,
  filter?: boolean,
  default?: boolean,
  success?: boolean,
  error?: boolean
};

const Pill = (props: Props) => (
  <div
    className={
      props.filter
        ? "pill filter"
        : props.default
          ? "pill default"
          : props.success
            ? "pill success"
            : props.error
              ? "pill error"
              : "pill"
    }
  >
    <span className="pillText">{props.pillText}</span>
    {props.filter ? (
      <a
        onClick={() => {
          props.removePill(props.pillText, props.pillKey);
        }}
        className="pillClose"
      >
        <Close />
      </a>
    ) : null}
  </div>
);

export default Pill;
