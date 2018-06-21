import React from "react";

import { shallow } from "enzyme";
import Tooltip from "./Tooltip";

describe("tooltip tests", () => {
  it("renders a tooltip", () => {
    shallow(<Tooltip targetId="test" />);
  });
});
