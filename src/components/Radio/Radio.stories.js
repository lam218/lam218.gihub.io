import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";

const stories = storiesOf("Radio", module);

stories.addDecorator(withKnobs);

import Radio from "./Radio";
import "./Radio.css";

stories
  .add("radio", () => (
    <Radio
      radioButtons={[
        { text: text("First Option", "1"), isDisabled: false },
        { text: text("Second Option", "2"), isDisabled: false },
        { text: text("Third Option", "3"), isDisabled: false }
      ]}
      name={"test"}
    />
  ))
  .add("one disabled radio", () => (
    <Radio
      radioButtons={[
        { text: text("First Option", "1"), isDisabled: false },
        { text: text("Second Option", "2"), isDisabled: false },
        { text: text("Third Option", "3"), isDisabled: true }
      ]}
      name={"test"}
    />
  ));
