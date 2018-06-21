import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Label", module);

stories.addDecorator(withKnobs);

import Label from "./Label";
import Input from "../Input";
import "./Label.css";

stories.add("just label", () => (
  <Label for={"test label"} labelText={text("Label", "Label")} />
));
