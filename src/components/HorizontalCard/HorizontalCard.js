// @flow
import * as React from "react";
import { Link } from "react-router-dom";
import Card from "../Card";
import TickGreen from "../../../public/icons/Tick-Green";

type Props = {
  type: string,
  link?: string,
  buttonMessage?: string,
  message: any,
  imgUrl: string,
  title?: string,
  imgStyle?: {
    width?: string,
    height?: string
  },
  imgDesc: string
};

const HorizontalCard = (props: Props) => (
  <Card bodyClassName={props.type} className="horizontalCar">
    <div className="carTitle">
      <p>{props.title}</p>
    </div>
    <div className="mobileCarTitle">
      <div style={{ display: "flex", flexDirection: "row" }}>
        <p>{props.title}</p>
        <TickGreen />
      </div>
      <p style={{ width: "105px" }}>{props.message}</p>
    </div>
    <div
      className="carMessageOuter"
      // style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      <div className="carMessage">
        <p>{props.message}</p>
        {/* Cannot use links in storybook, to uncomment when not in storybook
      {props.link && (
        <a color="link">
          <Link to={props.link}><p>{props.buttonMessage}</p></Link>
        </a>
      )} */}

        {props.link && (
          <a color="link">
            <p>{props.buttonMessage}</p>
          </a>
        )}
      </div>
      <img
        src={props.imgUrl}
        style={props.imgStyle}
        alt={props.imgDesc}
        height="44px"
      />
      <div className="icon">
        <TickGreen />
      </div>
    </div>
    <div className="mobileCar">
      <img
        src={props.imgUrl}
        style={props.imgStyle}
        alt={props.imgDesc}
        height="44px"
      />
      {/* Cannot use links in storybook, to uncomment when not in storybook
       props.link && <a color="link">
        <Link to={props.link}><p>{props.buttonMessage}</p></Link>
      </a>  */}
      {props.link && (
        <a className="link">
          <p>{props.buttonMessage}</p>
        </a>
      )}
    </div>
  </Card>
);

export default HorizontalCard;
