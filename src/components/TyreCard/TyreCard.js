// @flow
import React from "react";

import ListGroupLR from "../ListGroupLR";
import Card from "../Card";
import Button from "../Button";
import Tooltip from "../Tooltip";

import FuelIcon from "../../../public/icons/Tyre-Card-Fuel";
import LoadIcon from "../../../public/icons/Tyre-Card-Load";
import NoiseIcon from "../../../public/icons/Tyre-Card-Noise";
import SpeedIcon from "../../../public/icons/Tyre-Card-Speed";
import WetIcon from "../../../public/icons/Tyre-Card-Wet";

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

export default class TyreCard extends React.PureComponent<Props, State> {
  state = {
    multipleTyres: false
  };
  howMany() {
    this.setState({
      multipleTyres: true
    });
  }
  render() {
    return (
      <Card
        className="tyreCard"
        footerClassName="tyreFooter"
        headerClassName="tyreHeader"
        cardHeader={
          this.props.visibleLogo ? (
            <div className="logo">
              <img
                style={{ width: "100%" }}
                src={this.props.logo}
                alt={this.props.logoDesc}
              />
            </div>
          ) : (
            <div className="brandName">{this.props.brand}</div>
          )
        }
        cardFooter={
          <div>
            <div className="tyreChoose">
              <div className="tyrePrice">
                <p>FROM</p>
                <h3>{this.props.price}</h3>
              </div>
              {this.state.multipleTyres ? (
                <div>
                  <Button
                    primary
                    onClick={this.props.onClick(1, this.props.tyreLabel)}
                  >
                    1
                  </Button>
                  <Button
                    primary
                    onClick={this.props.onClick(2, this.props.tyreLabel)}
                  >
                    2
                  </Button>
                </div>
              ) : (
                <Button className="tyreSelect" primary onClick={this.howMany}>
                  Select
                </Button>
              )}
            </div>

            <div className="ratingList">
              {this.props.fuelRating ? (
                <div className="ratingItem">
                  <Tooltip
                    targetId="fuelRating"
                    placement="top"
                    tooltipText="Fuel Rating"
                  >
                    <FuelIcon />
                  </Tooltip>
                  <p>{this.props.fuelRating}</p>
                </div>
              ) : null}
              {this.props.wetRating ? (
                <div className="ratingItem">
                  <Tooltip
                    targetId="wetRating"
                    placement="top"
                    tooltipText="Wet Rating"
                  >
                    <WetIcon />
                  </Tooltip>

                  <p>{this.props.wetRating}</p>
                </div>
              ) : null}
              {this.props.noiseRating ? (
                <div className="ratingItem">
                  <Tooltip
                    targetId="noiseRating"
                    placement="top"
                    tooltipText="Noise Rating"
                  >
                    <NoiseIcon />
                  </Tooltip>

                  <p>
                    {this.props.noiseRating}
                    <span>dB</span>
                  </p>
                </div>
              ) : null}
              {this.props.speedRating ? (
                <div className="ratingItem">
                  <Tooltip
                    targetId="speedRating"
                    placement="top"
                    tooltipText="Speed Rating"
                  >
                    <SpeedIcon />
                  </Tooltip>

                  <p>{this.props.speedRating}</p>
                </div>
              ) : null}
              {this.props.loadRating ? (
                <div className="ratingItem">
                  <Tooltip
                    targetId="loadRating"
                    placement="top"
                    tooltipText="Load Rating"
                  >
                    <LoadIcon />
                  </Tooltip>

                  <p>{this.props.loadRating}</p>
                </div>
              ) : null}
            </div>
          </div>
        }
      >
        <div>
          <div className="tyreImg">
            <img src={this.props.tyreImg} alt={this.props.tyreDesc} />
          </div>
          <div className="tyreInfo">
            <h3>{this.props.brand}</h3>
            <h4>{this.props.model}</h4>
            <h5>{this.props.tyreLabel}</h5>
          </div>
        </div>
      </Card>
    );
  }
}
