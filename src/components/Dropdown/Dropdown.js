// @flow
import * as React from "react";

import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import ChevronUp from "react-icons/lib/io/chevron-up";
import ChevronDown from "react-icons/lib/io/chevron-down";
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
              <ChevronUp
                style={{
                  marginBottom: "5px",
                  marginRight: "10px"
                }}
              />
            ) : (
              <ChevronDown
                style={{
                  marginTop: "2px",
                  marginRight: "10px"
                }}
              />
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
