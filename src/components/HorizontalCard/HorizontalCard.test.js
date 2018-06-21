import React from "react";
import { shallow } from "enzyme";
import HorizontalCard from "./HorizontalCard";

describe("Horizonatl Card tests", () => {
  it("renders a card", () => {
    shallow(<HorizontalCard link="/" />);
  });
});
