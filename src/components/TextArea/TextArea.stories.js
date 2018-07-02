import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import TextArea from "./TextArea";
import "./TextArea.css";

storiesOf("Text area", module)
  .add("basic", () => (
    <TextArea className="textInput" placeholder="Type here..." />
  ))
  .add("fixed to number of rows", () => (
    <TextArea
      placeholder="Type here..."
      className="textInput"
      maxHeight={"100px"}
    />
  ));
