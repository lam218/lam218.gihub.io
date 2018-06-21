// @flow
import React from "react";

import ListGroupLR from "../ListGroupLR";
import Card from "../Card";
import Button from "../Button";
import Tooltip from "../Tooltip";

type Props = {
  visibleLogo?: boolean,
  logo?: string,
  logoDesc?: string,
  brand: string,
  model: string,
  tyreLabel: string,
  price: string,
  tyreImg: string,
  tyreDesc: string,
  onClick: (event: any) => void,
  fuelRating?: string,
  wetRating?: string,
  noiseRating?: string,
  speedRating?: string,
  loadRating?: string
};

const TyreCard = (props: Props) => (
  <Card
    className="tyreCard"
    footerClassName="tyreFooter"
    headerClassName="tyreHeader"
    cardHeader={
      props.visibleLogo ? (
        <div className="logo">
          <img
            style={{ width: "100%" }}
            src={props.logo}
            alt={props.logoDesc}
          />
        </div>
      ) : (
        <div className="brandName">{props.brand}</div>
      )
    }
    cardFooter={
      <div>
        <div className="tyreChoose">
          <div className="tyrePrice">
            <p>FROM</p>
            <h3>{props.price}</h3>
          </div>
          <Button className="tyreSelect" primary onClick={props.onClick}>
            Select
          </Button>
        </div>

        <div className="ratingList">
          {props.fuelRating ? (
            <div className="ratingItem">
              <Tooltip
                targetId="fuelRating"
                placement="top"
                tooltipText="Fuel Rating"
              >
                E
              </Tooltip>
              <p>{props.fuelRating}</p>
            </div>
          ) : null}
          {props.wetRating ? (
            <div className="ratingItem">
              <Tooltip
                targetId="wetRating"
                placement="top"
                tooltipText="Wet Rating"
              >
                W
              </Tooltip>

              <p>{props.wetRating}</p>
            </div>
          ) : null}
          {props.noiseRating ? (
            <div className="ratingItem">
              <Tooltip
                targetId="noiseRating"
                placement="top"
                tooltipText="Noise Rating"
              >
                N
              </Tooltip>

              <p>
                {props.noiseRating}
                <span>dB</span>
              </p>
            </div>
          ) : null}
          {props.speedRating ? (
            <div className="ratingItem">
              <Tooltip
                targetId="speedRating"
                placement="top"
                tooltipText="Speed Rating"
              >
                S
              </Tooltip>

              <p>{props.speedRating}</p>
            </div>
          ) : null}
          {props.loadRating ? (
            <div className="ratingItem">
              <Tooltip
                targetId="loadRating"
                placement="top"
                tooltipText="Load Rating"
              >
                L
              </Tooltip>

              <p>{props.loadRating}</p>
            </div>
          ) : null}
        </div>
      </div>
    }
  >
    <div>
      <div className="tyreImg">
        <img src={props.tyreImg} alt={props.tyreDesc} />
      </div>
      <div className="tyreInfo">
        <h3>{props.brand}</h3>
        <h4>{props.model}</h4>
        <h5>{props.tyreLabel}</h5>
      </div>
    </div>
  </Card>
);

export default TyreCard;
