import React from "react";
import { shallow } from "enzyme";
import Select from "./Select";

import { Label } from "reactstrap";

describe("Select tests", () => {
  it("renders a select", () => {
    shallow(<Select options={["1", "2", "3"]} />);
  }),
    it("if label, show label", () => {
      const select = shallow(
        <Select
          labelText={"label"}
          labelDesc="label"
          options={["1", "2", "3"]}
        />
      );
      select.contains(<Label for={"label"}>{"label"}</Label>);
    });
});
