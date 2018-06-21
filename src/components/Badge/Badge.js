import * as React from "react";
import { Badge } from "reactstrap";

type Props = {
  children: React.Node,
  primary?: boolean,
  success?: boolean
};

const ourBadge = (props: Props) => (
  <Badge
    className={
      props.primary
        ? "primary badge"
        : props.success
          ? "success badge"
          : "badge"
    }
  >
    {props.children}
  </Badge>
);

export default ourBadge;
