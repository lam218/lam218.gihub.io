import React from "react";

import { shallow } from "enzyme";
import SearchInput from "./SearchInput";
import { Input, InputGroupAddon } from "reactstrap";

describe("search input tests", () => {
  it("renders a input", () => {
    shallow(<SearchInput />);
  }),
    it("renders selected", () => {
      const search = shallow(<SearchInput />);
      search.simulate("click");
      expect(
        search.contains(
          <InputGroupAddon className={"selectedSearch"} addonType="append" />
        )
      );
    }),
    it("renders selected", () => {
      const onChange = jest.fn();
      const event = {
        preventDefault() {},
        target: { value: "the-value" }
      };

      const search = shallow(<SearchInput onChange={onChange} />);
      const input = search.find(".input");
      input.simulate("change", event.target.value);
      expect(onChange).toBeCalledWith("the-value", undefined);
    });
});
