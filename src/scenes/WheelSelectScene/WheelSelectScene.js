//@flow
import React from "react";

import { Container, Row, Col } from "reactstrap";
import Button from "../../components/Button";
import Label from "../../components/Label";
import Input from "../../components/Input";
import CarCard from "../../components/CarCard";
import TyreSizeCard from "../../components/TyreSizeCard";
import GDPRDisclaimer from "../../components/GDPRDisclaimer";

type State = {
  regValue: string,
  postcodeValue: string
};
const carProps = {
  carList: [
    { right: "Hyundai", left: "Make" },
    { right: "i30 Active Blue Drive CRD", left: "Model" },
    { right: "5 Door Hatchback", left: "Body" },
    { right: "White", left: "Colour" },
    { right: "BG62LDZ", left: "Reg" },
    { right: "2012", left: "Year" }
  ],
  carImg: "https://cdn.euroncap.com/media/29355/hyundai-i30-359-235.jpg"
};
const tyreOptions = [
  { tyreSize: "205 / 55 R16W", wheelSize: "16 inches" },
  { tyreSize: "205 / 55 R16W", wheelSize: "16 inches" }
];

export default class WheelSelectScene extends React.Component<{}, State> {
  state = {
    regValue: "CK66ULM",
    postcodeValue: "CF11 9PG",
    selectWheel: false,
    tyreChoice: ""
  };

  selectWheel(tyreLabel: string) {
    this.setState({
      selectWheel: true,
      tyreChoice: tyreLabel
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h2 style={{ marginBottom: "20px" }}>
              We'll find the right tyres for your {carProps.carList[0].right},
              {this.state.regValue}.
              <a className="notCarLink">
                <p>Not your car?</p>
              </a>
            </h2>
          </Col>
        </Row>

        <Row>
          <Col sm={12} lg={8}>
            <div className="mobileCarCard">
              <CarCard carImg={carProps.carImg} carList={carProps.carList} />
            </div>
            <div className="horizontalCarCard">
              <CarCard
                horizontal
                carImg={carProps.carImg}
                carList={carProps.carList}
              />
            </div>
          </Col>
          <Col sm={12} lg={4}>
            <GDPRDisclaimer />
          </Col>
        </Row>
        <Row>
          <Col sm={12} lg={8}>
            <h2>Which wheels does your car have?</h2>
            <p style={{ fontSize: "14px" }}>
              It's okay if you don't know off the top of your head. We've
              narrowed it down to these {tyreOptions.length} options.
            </p>
          </Col>
        </Row>

        <Row>
          {tyreOptions.map(tyre => (
            <Col xs={12} md={6}>
              <TyreSizeCard
                tyreSize={tyre.tyreSize}
                wheelSize={tyre.wheelSize}
                onClick={() => this.selectWheel(tyre.tyreSize)}
              />
            </Col>
          ))}
        </Row>
        <Row>
          <Col lg={4}>
            <p style={{ fontSize: "14px" }}>
              If you're near you car, please have a look for the markings on the
              side of it. Make sure the option you select here matched the one
              on your tyres.
            </p>
            <div>Stock tyre image will go here</div>
          </Col>
        </Row>

        {this.state.selectWheel && (
          <Button primary>That's my wheel. find me some tyres!</Button>
        )}
      </Container>
    );
  }
}
