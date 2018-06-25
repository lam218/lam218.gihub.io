import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const stories = storiesOf("Wheel Scene", module);

stories.addDecorator(withKnobs);

import WheelSelectScene from "./WheelSelectScene";
import "./WheelSelectScene.css";
import "../../App.css";

stories.add("Wheel Scene", () => <WheelSelectScene />);
