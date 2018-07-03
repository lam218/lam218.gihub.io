import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const stories = storiesOf("Home Page Scene", module);

stories.addDecorator(withKnobs);

import HomePageScene from "./HomePageScene";
import "./HomePageScene.css";
import "../../App.css";

stories.add("Home Page Scene", () => <HomePageScene />);
