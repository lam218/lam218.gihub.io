//@flow
import React, { Component } from "react";

import _ from "underscore";
import HorizontalCard from "../../components/HorizontalCard";
import Dropdown from "../../components/Dropdown";
import Pill from "../../components/Pill/Pill";
import TyreCard from "../../components/TyreCard";
import { Row, Col, Container } from "reactstrap";
import tyreCard from "./data";

let filterItems = [
  { text: "Filter Item", isSelected: false },
  { text: "2", isSelected: false },
  { text: "3", isSelected: false }
];
type State = {
  pillText: string[],
  filterItems: [{ text: string, isSelected: boolean }]
};

export default class TyreResultsScene extends Component<{}, State> {
  state = {
    pillText: [],
    filterItems: filterItems
  };
  selectItem = (text: string, isSelected: boolean, key: string) => {
    const selected = _.findWhere(this.state.filterItems, { text: text });
    selected.isSelected = !selected.isSelected;

    if (key === "filter") {
      if (isSelected) {
        this.removePill(text, "drop");
      } else {
        this.setState({
          pillText: _.uniq([text, ...this.state.pillText])
        });
      }
    }
  };
  removePill = (text: string, key: string) => {
    if (key == "pill") {
      const selected = _.findWhere(this.state.filterItems, { text: text });
      selected.isSelected = !selected.isSelected;
    }
    this.setState({
      pillText: _.without(this.state.pillText, text)
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <HorizontalCard
              type="carFound"
              title="Your Car"
              link="/"
              buttonMessage="Change car"
              message="Finding tyres to fit your Hyundai, BG62 LDZ"
              imgUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg?v=2"
              imgDesc="test car"
            />
          </Col>
        </Row>

        <Row>
          <Col>
            <h1>Here are manufacturer recommended tyres for your Hyundai</h1>
          </Col>
        </Row>

        <Row>
          <Col xl="12" sm="12" md="4" lg="6" xl="8">
            <h3
              style={{
                flex: "1"
              }}
            >
              {`${tyreCard.length} tyres available`}
            </h3>
          </Col>
          <Col xs="6" sm="6" md="4" lg="3" xl="2">
            <div
              style={{ marginRight: "10px" }}
              className={"dropdownSortMobile"}
            >
              <Dropdown
                selectItem={this.selectItem}
                itemKey={"price"}
                dropdownText={`Sort`}
                items={filterItems}
              />
            </div>
            <div style={{ marginRight: "10px" }} className={"dropdownSort"}>
              <Dropdown
                selectItem={this.selectItem}
                itemKey={"price"}
                dropdownText={`Sort by Price`}
                items={filterItems}
              />
            </div>
          </Col>
          <Col xs="6" sm="6" md="4" lg="3" xl="2">
            <div style={{ marginLeft: "10px" }} className={"dropdownFilter"}>
              <Dropdown
                dropdownText={`Filters (${
                  filterItems.filter(item => item.isSelected).length
                })`}
                items={filterItems}
                selectItem={this.selectItem}
                itemKey={"filter"}
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="pillContainer">
            {this.state.pillText.map(text => (
              <Pill
                filter
                pillText={text}
                pillKey={"pill"}
                removePill={this.removePill(text, "pill")}
              />
            ))}
          </Col>
        </Row>
        <Row>
          {tyreCard.map(tyre => (
            <Col sm="12" md="6" lg="4" xl="3">
              <TyreCard
                visibleLogo={tyre.visibleLogo}
                logo={tyre.logo}
                logoDesc={tyre.logoDesc}
                brand={tyre.brand}
                model={tyre.model}
                tyreLabel={tyre.tyreLabel}
                price={tyre.price}
                tyreImg={tyre.tyreImg}
                fuelRating={tyre.fuelRating}
                wetRating={tyre.wetRating}
                noiseRating={tyre.noiseRating}
                speedRating={tyre.speedRating}
                loadRating={tyre.loadRating}
              />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}
