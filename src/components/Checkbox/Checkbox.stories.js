import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Checkbox", module);

stories.addDecorator(withKnobs);
import Checkbox from "./Checkbox";
import "./Checkbox.css";

stories
  .add("checkbox", () => (
    <Checkbox>{text("Checkbox Text", "Choose me")}</Checkbox>
  ))
  .add("disabled checkbox", () => (
    <Checkbox isDisabled>{text("Checkbox Text", "Choose me")}</Checkbox>
  ));
