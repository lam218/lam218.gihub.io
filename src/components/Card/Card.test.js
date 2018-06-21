import React from "react";
import { shallow } from "enzyme";
import Card from "./Card";
import {
  CardTitle,
  CardSubtitle,
  CardImg,
  CardHeader,
  CardFooter
} from "reactstrap";

describe("Card tests", () => {
  it("renders a card", () => {
    shallow(<Card />);
  }),
    it("renders title given prop", () => {
      const props = {
        cardTitle: "Header"
      };
      const card = shallow(<Card {...props} />);
      expect(card.contains(<CardTitle>Header</CardTitle>));
    }),
    it("renders subtitle given prop", () => {
      const props = {
        cardSubtitle: "Subtitle"
      };
      const card = shallow(<Card {...props} />);
      expect(card.contains(<CardSubtitle>Subtitle</CardSubtitle>));
    });
  it("renders image given prop", () => {
    const props = {
      imgUrl:
        "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
      imgDesc: "test image"
    };
    const card = shallow(<Card {...props} />);
    expect(
      card.contains(
        <CardImg top width="100%" src={props.imgUrl} alt={props.imgDesc} />
      )
    );
  }),
    it("renders header given prop", () => {
      const props = {
        cardHeader: "Header"
      };
      const card = shallow(<Card {...props} />);
      expect(card.contains(<CardHeader>Header</CardHeader>));
    }),
    it("renders footer given prop", () => {
      const props = {
        cardFooter: "Footer"
      };
      const card = shallow(<Card {...props} />);
      expect(card.contains(<CardFooter>Footer</CardFooter>));
    });
});
