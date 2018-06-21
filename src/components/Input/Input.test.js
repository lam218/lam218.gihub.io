import React from "react";

import { shallow } from "enzyme";
import Input from "./Input";

describe("input tests", () => {
  it("renders a input", () => {
    shallow(<Input />);
  }),
    it("triggers onChange function", () => {
      const onChange = jest.fn();
      const event = {
        preventDefault() {},
        target: { value: "the-value" }
      };

      const input = shallow(<Input onChange={onChange} />);
      input.simulate("change", event.target.value);
      expect(onChange).toBeCalledWith("the-value", undefined);
    }),
    it("if className, apply className", () => {
      const input = shallow(<Input className={"label"} />);
      input.contains(<Input className="input label" />);
    });
});
