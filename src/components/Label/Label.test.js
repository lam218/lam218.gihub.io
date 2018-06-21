import React from "react";

import { shallow } from "enzyme";
import Label from "./Label";

describe("label tests", () => {
  it("renders a label", () => {
    shallow(<Label />);
  });
});
