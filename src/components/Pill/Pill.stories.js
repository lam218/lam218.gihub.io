import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Pill", module);

stories.addDecorator(withKnobs);

import Pill from "./Pill";
import "./Pill.css";

stories
  .add("filter pill", () => (
    <Pill filter pillText={text("Pill Text", "Pill")} />
  ))
  .add("default pill", () => (
    <Pill default pillText={text("Pill Text", "Pill")} />
  ))
  .add("success pill", () => (
    <Pill success pillText={text("Pill Text", "Pill")} />
  ))
  .add("error pill", () => <Pill error pillText={text("Pill Text", "Pill")} />);
