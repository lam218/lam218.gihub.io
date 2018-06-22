// @flow
import React from "react";

import { InputGroup, InputGroupAddon, Input } from "reactstrap";

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
    this.setState({ isSelected: !this.state.isSelected });
  };

  render() {
    return (
      <InputGroup onClick={() => this.select()} onBlur={() => this.select()}>
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
          S
        </InputGroupAddon>
      </InputGroup>
    );
  }
}
