//@flow
import React from "react";

import { Container, Row, Col } from "reactstrap";
import Button from "../../components/Button";
import Label from "../../components/Label";
import Input from "../../components/Input";
import CarCard from "../../components/CarCard";
import TyreSizeCard from "../../components/TyreSizeCard";
import WheelCard from "../../components/WheelCard/WheelCard";

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
    postcodeValue: "CF11 9PG"
  };
  render() {
    return (
      <Container>
        {/* <Row style={{ minWidth: "250px" }}>
          <Col>
            <Label for={"registration number"} labelText={"Reg. Number"}>
              <Input value={this.state.regValue} placeholder="Reg. Number" />
            </Label>
          </Col>
          <Col>
            <Label for={"test input"} labelText={"Postcode"}>
              <Input value={this.state.postcodeValue} placeholder="Postcode" />
            </Label>
          </Col>
        </Row>
        <Row style={{ minWidth: "250px" }}>
          <Col style={{ display: "flex" }}>
            <Button className="searchButtonTyre">Search</Button>
          </Col>
        </Row> */}
        <h2>
          We'll find the right tyres for your {carProps.carList[0].right},{" "}
          {this.state.regValue}.
        </h2>
        <a className="notCarLink">Not your car?</a>
        <CarCard
          // horizontalImg
          carImg={carProps.carImg}
          carList={carProps.carList}
        />
        <div style={{ minWidth: "250px" }}>
          <h2>Which wheels does your car have?</h2>
          <p>
            It's okay if you don't know off the top of your head. We've narrowed
            it down to these {tyreOptions.length} options
          </p>
          {tyreOptions.map(tyre => (
            <TyreSizeCard tyreSize={tyre.tyreSize} wheelSize={tyre.wheelSize} />
          ))}

          <p>
            If you're near you car, please have a look for the markings on the
            side of it. Make sure the option you select here matched the one on
            your tyres.
          </p>
          <WheelCard />
        </div>
      </Container>
    );
  }
}
