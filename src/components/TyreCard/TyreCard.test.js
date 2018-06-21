import React from "react";

import { shallow } from "enzyme";
import TyreCard from "./TyreCard";

describe("Tyre card tests", () => {
  it("renders a card", () => {
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
      ],
      tyreImg:
        "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
      tyreDesc: "test img"
    };
    shallow(<TyreCard {...props} />);
  }),
    it("renders a logo when given", () => {
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
        ],
        tyreImg:
          "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        tyreDesc: "test img",
        visibleLogo: true,
        logo: (
          <img
            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
            alt="logo"
          />
        )
      };
      shallow(<TyreCard {...props} />);
    });
});
