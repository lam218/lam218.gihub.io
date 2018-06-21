import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

import Button from "./Button";
import "./Button.css";

stories
  .add("primary", () => (
    <Button primary onClick={action("clicked")}>
      {text("Button Text", "Primary")}
    </Button>
  ))
  .add("secondary", () => (
    <Button secondary onClick={action("clicked")}>
      {text("Button Text", "Secondary")}
    </Button>
  ))
  .add("tertiary", () => (
    <Button onClick={action("clicked")}>
      {text("Button Text", "Tertiary")}
    </Button>
  ))
  .add("disabled", () => (
    <Button disabled onClick={action("clicked")}>
      {text("Button Text", "Disabled")}
    </Button>
  ))
  .add("success", () => (
    <Button success onClick={action("clicked")}>
      {text("Button Text", "Success")}
    </Button>
  ))
  .add("irreversible", () => (
    <Button noBack onClick={action("clicked")}>
      {text("Button Text", "Irreversible")}
    </Button>
  ));
