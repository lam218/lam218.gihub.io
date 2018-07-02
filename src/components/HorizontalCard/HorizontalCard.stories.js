import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import HorizontalCard from "./HorizontalCard";
import "./HorizontalCard.css";

storiesOf("Horizontal Card", module).add("Car card", () => (
  <HorizontalCard
    type="carFound"
    title="Your Car"
    link="/"
    buttonMessage="Change car"
    message="Finding tyres to fit your Hyundai, BG62 LDZ"
    imgUrl="https://auto.ndtvimg.com/car-images/medium/maruti-suzuki/baleno/maruti-suzuki-baleno.jpg?v=2"
    imgDesc="test car"
  />
));
