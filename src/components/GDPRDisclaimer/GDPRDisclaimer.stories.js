import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

const stories = storiesOf("GDPR Disclaimer", module);

stories.addDecorator(withKnobs);

import GDPRDisclaimer from "./GDPRDisclaimer";
import "./GDPRDisclaimer.css";

stories.add("GDPR Disclaimer card", () => <GDPRDisclaimer />);
