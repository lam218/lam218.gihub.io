import React from "react";

import { shallow } from "enzyme";
import List from "./ListGroupLR";

describe("list tests", () => {
  it("renders a list", () => {
    const props = {
      List: [
        { right: "Hyundai", left: "Make" },
        { right: "i30 Active Blue Drive CRD", left: "Model" },
        { right: "5 Door Hatchback", left: "Body" },
        { right: "White", left: "Colour" },
        { right: "BG62LDZ", left: "Reg" },
        { right: "2012", left: "Year" },
        { right: "1.6", left: "Engine" },
        { right: "109.0", left: "BHP" }
      ]
    };
    shallow(<List {...props} />);
  }),
    it("renders lines given prop", () => {
      const props = {
        lines: true,
        List: [
          { right: "Hyundai", left: "Make" },
          { right: "i30 Active Blue Drive CRD", left: "Model" },
          { right: "5 Door Hatchback", left: "Body" },
          { right: "White", left: "Colour" },
          { right: "BG62LDZ", left: "Reg" },
          { right: "2012", left: "Year" },
          { right: "1.6", left: "Engine" },
          { right: "109.0", left: "BHP" }
        ]
      };
      const list = shallow(<List {...props} />);
      expect(list.contains(<hr />));
    }),
    it("renders bold given prop", () => {
      const props = {
        bold: true,
        List: [
          { right: "Hyundai", left: "Make" },
          { right: "i30 Active Blue Drive CRD", left: "Model" },
          { right: "5 Door Hatchback", left: "Body" },
          { right: "White", left: "Colour" },
          { right: "BG62LDZ", left: "Reg" },
          { right: "2012", left: "Year" },
          { right: "1.6", left: "Engine" },
          { right: "109.0", left: "BHP" }
        ]
      };
      const list = shallow(<List {...props} />);
      expect(list.contains(<span className={"leftListBold"}>{"Make"}</span>));
    });
});
