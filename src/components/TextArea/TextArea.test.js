import React from "react";
import { shallow } from "enzyme";
import TextArea from "./TextArea";
import { Label } from "reactstrap";

describe("TextArea tests", () => {
  it("renders a text area", () => {
    shallow(<TextArea />);
  }),
    it("triggers onChange function", () => {
      const onChange = jest.fn();
      const event = {
        preventDefault() {},
        target: { value: "the-value" }
      };

      const textArea = shallow(
        <TextArea onChange={onChange} className="input" />
      );
      textArea.find(".input").simulate("change", event.target.value);
      expect(onChange).toBeCalledWith("the-value", undefined);
    }),
    it("if label, show label", () => {
      const textArea = shallow(<TextArea label={"label"} labelDesc="label" />);
      textArea.contains(<Label for={"label"}>{"label"}</Label>);
    });
});
