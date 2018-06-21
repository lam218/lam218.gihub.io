import React from "react";
import { shallow } from "enzyme";
import Checkbox from "./Checkbox";

describe("Checkbox tests", () => {
  it("renders a checbox", () => {
    shallow(<Checkbox />);
  }),
    it("renders a disaabled checkbox", () => {
      const props = {
        isDisabled: true
      };
      const checkbox = shallow(<Checkbox {...props} />);
      expect(checkbox.contains(<div className={"check disabled"} />));
    });
});
