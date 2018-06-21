import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Footer from "./Footer";
import "./Footer.css";

storiesOf("Footer", module).add("footer", () => <Footer />);
