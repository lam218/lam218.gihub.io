import React, { Component } from "react";

import _ from "underscore";
import HorizontalCard from "../../components/HorizontalCard";
import Dropdown from "../../components/Dropdown";
import Pill from "../../components/Pill/Pill";
import TyreCard from "../../components/TyreCard";
import { Row, Col } from "reactstrap";
import tyreCard from "./data";

let filterItems = [
  { text: "Filter Item", isSelected: false },
  { text: "2", isSelected: false },
  { text: "3", isSelected: false }
];

export default class TyreResultsScene extends Component {
  state = {
    pillText: [],
    filterItems: filterItems
  };
  selectItem = (text, isSelected, key) => {
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
  removePill = (text, key) => {
    if (key == "pill") {
      const selected = _.findWhere(this.state.filterItems, { text: text });
      selected.isSelected = !selected.isSelected;
    }
    this.setState({
      pillText: _.without(this.state.pillText, text)
    });
  };
  render() {
    console.log(this.state.pillText);
    return (
      <div>
        <HorizontalCard />
        <h1 style={{ fontSize: "2.5em", fontWeight: "bold" }}>
          Here are manufacturer recommended tyres for your Hyundai
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            margin: "20px 0"
          }}
        >
          <h3
            style={{
              flex: "1",
              fontSize: "1.5em"
            }}
          >
            {`${tyreCard.length} tyres available`}
          </h3>

          <div className={"dropdownFilter"}>
            <Dropdown
              selectItem={this.selectItem}
              itemKey={"price"}
              dropdownText={`Sort by Price`}
              items={filterItems}
            />
          </div>
          <div className={"dropdownFilter"}>
            <Dropdown
              dropdownText={`Filters (${
                filterItems.filter(item => item.isSelected).length
              })`}
              items={filterItems}
              selectItem={this.selectItem}
              itemKey={"filter"}
            />
          </div>
        </div>
        {this.state.pillText.map(text => (
          <Pill
            filter
            pillText={text}
            pillKey={"pill"}
            removePill={this.removePill}
          />
        ))}

        <div>
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
        </div>
      </div>
    );
  }
}
