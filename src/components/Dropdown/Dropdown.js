// @flow
import * as React from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ArrowUp from "../../../public/icons/Arrow-Up";
import ArrowDown from "../../../public/icons/Arrow-Down";
import "./Dropdown.css";

type Props = {
  dropdownText: string,
  items: [{ text: string, isSelected: boolean }],
  selectItem: (text: string, isSelected: boolean, key: string) => void,
  itemKey: string
};
type State = {
  dropdownOpen: boolean
};

export default class ourDropdown extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      dropdownOpen: false
    };
  }
  toggle: () => void = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  };
  render() {
    return (
      <div className={"dropdownOuter"}>
        <Dropdown
          className={"buttonDropdown"}
          isOpen={this.state.dropdownOpen}
          toggle={this.toggle}
        >
          <DropdownToggle
            onClick={this.toggle}
            data-toggle="dropdown"
            tag="span"
            aria-expanded={this.state.dropdownOpen}
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              cursor: "pointer"
            }}
          >
            <span className="dropdownText">{this.props.dropdownText}</span>
            {this.state.dropdownOpen ? (
              <div
                style={{
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2px"
                }}
              >
                <ArrowUp />
              </div>
            ) : (
              <div
                style={{
                  marginRight: "10px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2px"
                }}
              >
                <ArrowDown />
              </div>
            )}
          </DropdownToggle>

          <DropdownMenu className="dropdownMenu">
            {this.props.items.map((item, i) => (
              <div
                onClick={() => {
                  this.props.selectItem(
                    item.text,
                    item.isSelected,
                    this.props.itemKey
                  );
                }}
                className={
                  item.isSelected
                    ? `dropdownItem ${"selected"}`
                    : "dropdownItem"
                }
                key={i}
              >
                {item.text}
              </div>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}
