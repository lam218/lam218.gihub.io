import React from "react";
import { shallow } from "enzyme";
import Navbar from "./Navbar";

describe("Navbar tests", () => {
  it("renders a navbar", () => {
    const props = {
      navItems: [{ link: "/", name: "home" }]
    };
    shallow(<Navbar {...props} />);
  });
});
