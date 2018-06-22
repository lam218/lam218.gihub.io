import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Search Input", module);

stories.addDecorator(withKnobs);

import SearchInput from "./SearchInput";
import "./SearchInput.css";

stories
  .add("Search with placeholder", () => (
    <SearchInput placeholder={text("Placeholder", "Search")} />
  ))
  .add("Search input with Value", () => (
    <SearchInput value={text("Value", "Tyres")} />
  ));
