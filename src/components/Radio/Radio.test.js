import React from "react";
import { shallow } from "enzyme";
import Radio from "./Radio";
import { Input } from "reactstrap";

describe("Radio tests", () => {
  it("renders a radio", () => {
    const props = {
      radioButtons: ["1", "2", "3"],
      name: "test"
    };

    shallow(<Radio {...props} />);
  }),
    it("renders a disabled radio", () => {
      const props = {
        radioButtons: [
          { text: "1", isDisabled: false },
          { text: "2", isDisabled: false },
          { text: "3", isDisabled: true }
        ],
        name: "test"
      };

      const radio = shallow(<Radio {...props} />);
      expect(
        radio.contains(<Input type="radio" name={"test"} disabled={true} />)
      );
    });
});
