import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Select from "./Select";
import "./Select.css";

storiesOf("Select", module)
  .add("select", () => <Select options={["1", "2", "3"]} />)
  .add("select with label", () => (
    <Select
      labelText="Label"
      labelDesc="test select"
      options={["1", "2", "3"]}
    />
  ));
