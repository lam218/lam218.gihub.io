import React from "react";
import { shallow } from "enzyme";
import Dropdown from "./Dropdown";
import ChevronUp from "react-icons/lib/io/chevron-up";

describe("Dropdown tests", () => {
  it("renders a dropdown", () => {
    const props = {
      items: ["1", "2", "3"]
    };
    shallow(<Dropdown {...props} />);
  }),
    it("triggers function onClick", () => {
      const props = { toggle: () => true, items: ["1", "2", "3"] };
      const button = shallow(<Dropdown {...props} />);
      button.simulate("click");
    }),
    it("renders a opens a dropdown", () => {
      const props = {
        items: ["1", "2", "3"],
        dropdownOpen: true
      };
      const dropdown = shallow(<Dropdown {...props} />);
      dropdown.contains(
        <ChevronUp style={{ marginBottom: "5px", marginRight: "10px" }} />
      );
    }),
    it("selects a dropdown item", () => {
      const props = {
        items: [
          { text: "1", isSelected: false },
          { text: "2", isSelected: true },
          { text: "3", isSelected: false }
        ],
        dropdownOpen: true
      };
      const dropdown = shallow(<Dropdown {...props} />);
      dropdown.contains(
        <div className={`dropdownItem selected`} key={1}>
          2
        </div>
      );
    });
});
