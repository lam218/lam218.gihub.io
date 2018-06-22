import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import WheelCard from "./WheelCard";
import "./WheelCard.css";

storiesOf("Wheel Card", module).add("wheel card", () => (
  <WheelCard tyreSize={"205 / 55 R16W"} />
));
