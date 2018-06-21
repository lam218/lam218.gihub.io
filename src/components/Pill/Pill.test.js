import React from "react";
import { shallow } from "enzyme";
import Pill from "./Pill";

describe("Pill tests", () => {
  it("renders a pill", () => {
    shallow(<Pill />);
  }),
    it("triggers function onClick", () => {
      const pill = shallow(<Pill filter />);
      pill.find("a").simulate("click");
    });
});
