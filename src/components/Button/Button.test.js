import React from "react";
import { shallow } from "enzyme";
import Button from "./Button";

describe("Button tests", () => {
  it("renders a button", () => {
    shallow(<Button />);
  }),
    it("triggers function onClick", () => {
      const props = { onClick: () => true };
      const button = shallow(<Button {...props} />);
      button.simulate("click");
    }),
    it("changes classname to primary", () => {
      const props = { primary: true };
      const button = shallow(<Button {...props} />);
      const buttonClass = button.find(".primary");
      expect(buttonClass.length).toBe(1);
    }),
    it("changes classname to secondary", () => {
      const props = { secondary: true };
      const button = shallow(<Button {...props} />);
      const buttonClass = button.find(".secondary");
      expect(buttonClass.length).toBe(1);
    }),
    it("changes classname to tertiary", () => {
      const props = {};
      const button = shallow(<Button {...props} />);
      const buttonClass = button.find(".tertiary");
      expect(buttonClass.length).toBe(1);
    }),
    it("changes classname to success", () => {
      const props = { success: true };
      const button = shallow(<Button {...props} />);
      const buttonClass = button.find(".success");
      expect(buttonClass.length).toBe(1);
    }),
    it("changes classname to irreversible", () => {
      const props = { noBack: true };
      const button = shallow(<Button {...props} />);
      const buttonClass = button.find(".irreversible");
      expect(buttonClass.length).toBe(1);
    });
});
