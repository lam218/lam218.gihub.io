//@flow
import React, { Component } from "react";
import Input from "../../components/Input/Input";
import Card from "../../components/Card/Card";
import Label from "../../components/Label/Label";
import Button from "../../components/Button/Button";

export default class HomePageScene extends Component {
  state = {
    regValue: String,
    postCodeValue: String
  };

  onClick(e) {
    const regValue = this.state.regValue;
    const postCodeValue = this.state.postCodeValue;
    const confirmedPostCodeValue = postCodeValue.match(
      /^[a-zA-Z]{1,2}([0-9]{1,2}|[0-9][a-zA-Z])\s*[0-9][a-zA-Z]{2}$/
    );

    if (confirmedPostCodeValue === null) {
      console.log("This is a bad post code");
    } else {
      console.log("This is a good post code");
    }
  }

  onChangeRegInput(e) {
    this.setState({ regValue: e.target.value });
  }

  onChangePostCodeInput(e) {
    this.setState({ postCodeValue: e.target.value });
  }

  render() {
    return (
      <Card className="mainCard">
        <div className="mainDiv">
          <Label labelText="Enter Vehicle Registration">
            <Input
              placeholder="EN12 EET"
              onChange={e => this.onChangeRegInput(e)}
            />
          </Label>
          &nbsp; &nbsp;
          <Label labelText="Enter Post Code">
            <Input
              placeholder="NP44 5TJ"
              onChange={e => this.onChangePostCodeInput(e)}
            />
          </Label>
        </div>
        <Button className="searchButton" onClick={e => this.onClick(e)}>
          Search
        </Button>
      </Card>
    );
  }
}
