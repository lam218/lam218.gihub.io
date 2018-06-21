import { configure } from "@storybook/react";
import "bootstrap/dist/css/bootstrap.css";
import "../src/theme.css";

const req = require.context("../src/components", true, /\.stories\.js$/);
const reqScene = require.context("../src/scenes", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
  reqScene.keys().forEach(filename => reqScene(filename));
}

configure(loadStories, module);
