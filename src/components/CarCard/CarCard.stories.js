import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import CarCard from "./CarCard";
import "./CarCard.css";

storiesOf("Car Card", module)
  .add("car card", () => (
    <CarCard
      carList={[
        { right: "Hyundai", left: "Make" },
        { right: "i30 Active Blue Drive CRD", left: "Model" },
        { right: "5 Door Hatchback", left: "Body" },
        { right: "White", left: "Colour" },
        { right: "BG62LDZ", left: "Reg" },
        { right: "2012", left: "Year" }
      ]}
    />
  ))
  .add("car card with image(if we get it)", () => (
    <CarCard
      carImg={"https://cdn.euroncap.com/media/29355/hyundai-i30-359-235.jpg"}
      carList={[
        { right: "Hyundai", left: "Make" },
        { right: "i30 Active Blue Drive CRD", left: "Model" },
        { right: "5 Door Hatchback", left: "Body" },
        { right: "White", left: "Colour" },
        { right: "BG62LDZ", left: "Reg" },
        { right: "2012", left: "Year" }
      ]}
    />
  ));
