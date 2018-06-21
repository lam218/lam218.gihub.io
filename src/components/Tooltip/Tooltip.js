//@flow
import * as React from "react";

import { Tooltip } from "reactstrap";

type Props = {
  placement: string,
  targetId: string,
  tooltipText: string,
  children: React.Node
};
type State = {
  tooltipOpen: boolean
};

export default class ourTooltip extends React.Component<Props, State> {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      tooltipOpen: false
    };
  }

  toggle: () => void = () => {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  };
  render() {
    return (
      <div>
        <a id={this.props.targetId}>{this.props.children}</a>
        <Tooltip
          placement={this.props.placement}
          isOpen={this.state.tooltipOpen}
          target={this.props.targetId}
          toggle={this.toggle}
        >
          {this.props.tooltipText}
        </Tooltip>
      </div>
    );
  }
}
