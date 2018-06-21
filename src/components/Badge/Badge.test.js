import React from "react";
import { shallow } from "enzyme";
import OurBadge from "./Badge";
import { Badge } from "reactstrap";

describe("Badge tests", () => {
  it("renders a badge", () => {
    shallow(<OurBadge />);
  }),
    it("render a primary badge", () => {
      const props = {
        primary: true
      };
      const badge = shallow(<OurBadge {...props} />);
      badge.contains(<Badge className={"primary badge"} />);
    }),
    it("render a success badge", () => {
      const props = {
        success: true
      };
      const badge = shallow(<OurBadge {...props} />);
      badge.contains(<Badge className={"success badge"} />);
    });
});
