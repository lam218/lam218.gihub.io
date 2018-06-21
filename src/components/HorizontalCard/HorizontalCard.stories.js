import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import HorizontalCard from "./HorizontalCard";
import "./HorizontalCard.css";

storiesOf("Horizontal Card", module).add("Card card", () => (
  <HorizontalCard
    type="car"
    buttonMessage="Back to search"
    message="You are selected your car"
    imgUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg?v=2"
    imgDesc="test car"
  />
));
