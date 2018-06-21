import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Card", module);

stories.addDecorator(withKnobs);

import Card from "./Card";
import "./Card.css";

stories.add("basic card", () => (
  <Card>{text("Card content", "Card content")}</Card>
));
