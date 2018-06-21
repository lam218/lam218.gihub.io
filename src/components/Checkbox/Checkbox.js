// @flow
import * as React from "react";
import { Label, Input, FormGroup } from "reactstrap";

type Props = {
  children: React.Node,
  isDisabled: boolean
};
type State = {
  selected: boolean
};

export default class Checkbox extends React.Component<Props, State> {
  state = {
    selected: false
  };

  render() {
    return (
      <FormGroup check>
        <div className={this.props.isDisabled ? "check disabled" : "check"}>
          <Label check>
            <Input
              type="checkbox"
              disabled={this.props.isDisabled ? true : false}
              // onClick={() => this.setState({ selected: !this.state.selected })}
            />

            <span
              className={
                // this.props.isDisabled && this.state.selected
                //   ? "selected checkmark disabled"
                this.props.isDisabled
                  ? "checkmark disabled"
                  : //     : this.state.selected
                    //       ? "selected checkmark"
                    "checkmark"
              }
            />

            <span
              className={
                this.props.isDisabled ? "checkText disabled" : "checkText"
              }
            >
              {this.props.children}
            </span>
          </Label>
        </div>
      </FormGroup>
    );
  }
}
