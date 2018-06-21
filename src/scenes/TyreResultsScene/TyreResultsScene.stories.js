import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

const stories = storiesOf("Tyre Scene", module);

stories.addDecorator(withKnobs);

import TyreResultsScene from "./TyreResultsScene";
import "./TyreResultsScene.css";
import "../../App.css";

stories.add("Tyre Scene", () => <TyreResultsScene />);
