import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import ListGroupLR from "./ListGroupLR";
import "./ListGroupLR.css";

storiesOf("List", module).add("list group", () => (
  <ListGroupLR
    List={[
      { right: "Hyundai", left: "Make" },
      { right: "i30 Active Blue Drive CRD", left: "Model" },
      { right: "5 Door Hatchback", left: "Body" },
      { right: "White", left: "Colour" },
      { right: "BG62LDZ", left: "Reg" },
      { right: "2012", left: "Year" }
    ]}
  />
));
