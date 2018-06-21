// @flow
import * as React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

type Props = {
  type: string,
  link?: string,
  buttonMessage?: string,
  message: any,
  imgUrl: string,
  imgStyle?: {
    width?: string,
    height?: string
  },
  imgDesc: string
};

const HorizontalCard = (props: Props) => (
  <div className="box">
    <div className="left">
      <div>{props.type}</div>
      {props.link && (
        <Button color="link">
          <Link to={props.link}>{props.buttonMessage}</Link>
        </Button>
      )}
    </div>
    <div className="right">
      <div>{props.message}</div>
      <img src={props.imgUrl} style={props.imgStyle} alt={props.imgDesc} />Icon
    </div>
  </div>
);

export default HorizontalCard;
