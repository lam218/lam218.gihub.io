import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const stories = storiesOf("Dropdown", module);

stories.addDecorator(withKnobs);

import Dropdown from "./Dropdown";
import "./Dropdown.css";

stories
  .add("filter", () => (
    <Dropdown
      dropdownOpen={boolean("Dropdown Open", false)}
      toggle={action("clicked")}
      items={[
        { text: "1", isSelected: false },
        { text: "2", isSelected: false },
        { text: "3", isSelected: false }
      ]}
      dropdownText={text("Dropdown Text", "Filter")}
    />
  ))
  .add("filter open and none selected", () => (
    <Dropdown
      dropdownOpen={boolean("Dropdown Open", true)}
      toggle={action("clicked")}
      items={[
        { text: text("First Option", "1"), isSelected: false },
        { text: text("Second Option", "2"), isSelected: false },
        { text: text("Third Option", "3"), isSelected: false }
      ]}
      dropdownText={text("dropdownText", "Filter")}
    />
  ))
  .add("filter open and 1 selected", () => (
    <Dropdown
      dropdownOpen={boolean("Dropdown Open", true)}
      toggle={action("clicked")}
      items={[
        { text: text("First Option", "1"), isSelected: true },
        { text: text("Second Option", "2"), isSelected: false },
        { text: text("Third Option", "3"), isSelected: false }
      ]}
      dropdownText={text("Dropdown Text", "Filter")}
    />
  ));
