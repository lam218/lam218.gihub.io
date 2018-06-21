import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("Badge", module);

stories.addDecorator(withKnobs);

import Badge from "./Badge";
import "./Badge.css";

stories
  .add("primary", () => <Badge primary>{text("Badge Text", "Primary")}</Badge>)
  .add("success", () => <Badge success>{text("Badge Text", "Success")}</Badge>);
