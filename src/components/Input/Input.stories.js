import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Input", module);

stories.addDecorator(withKnobs);

import Input from "./Input";
import Label from "../Label";
import "./Input.css";

stories
  .add("Input with placeholder", () => (
    <Input placeholder={text("Placeholder", "Car registration")} />
  ))
  .add("Input with label", () => (
    <Label for={"test input"} labelText={text("Label", "Label for input")}>
      <Input placeholder={text("Placeholder", "With label")} />
    </Label>
  ))
  .add("success input", () => (
    <Input value={text("Value", "CF158AZ")} className={"successInput"} />
  ))
  .add("error input", () => (
    <Input value={text("Value", "CF1GAZ")} className={"errorInput"} />
  ))
  .add("disabled input", () => (
    <Input
      value={text("Value", "CF158AZ")}
      disabled
      className={"disabledInput"}
    />
  ));
