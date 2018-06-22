// @flow
import React from "react";

import { InputGroup, InputGroupAddon, Input } from "reactstrap";
import SearchBlack from "../../../public/icons/Search-Black";
import SearchWhite from "../../../public/icons/Search-White";

type Props = {
  type: string,
  placeholder: string,
  disabled?: boolean,
  value: string,
  onChange: (e: any, key: string) => void,
  isSelected: () => void,
  key: string
};
type State = {
  isSelected: boolean
};

export default class searchInput extends React.Component<Props, State> {
  constructor() {
    super();
    this.state = {
      isSelected: false
    };
    this.select = this.select.bind(this);
  }
  select: () => void = () => {
    this.setState({ isSelected: true });
  };
  notSelect: () => void = () => {
    this.setState({ isSelected: false });
  };

  render() {
    return (
      <InputGroup
        className="searchBox"
        onClick={() => this.select()}
        onBlur={() => this.notSelect()}
      >
        <Input
          type={this.props.type}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={e => this.props.onChange(e, this.props.key)}
          className={"input search"}
        />
        <InputGroupAddon
          className={this.state.isSelected ? "selectedSearch" : ""}
          addonType="append"
        >
          {this.state.isSelected ? <SearchWhite /> : <SearchBlack />}
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
