import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TyreSizeCard from "./TyreSizeCard";
import "./TyreSizeCard.css";

storiesOf("Tyre Size Card", module).add("tyre card", () => (
  <TyreSizeCard tyreSize={"205 / 55 R16W"} wheelSize={"16 inches"} />
));
