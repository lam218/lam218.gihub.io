import React from "react";
import { shallow } from "enzyme";
import Modal from "./Modal";
import { ModalHeader, ModalFooter } from "reactstrap";

describe("Modal tests", () => {
  it("renders a modal", () => {
    shallow(<Modal />);
  }),
    it("renders header given prop", () => {
      const props = {
        modalHeader: "Header"
      };
      const modal = shallow(<Modal {...props} />);
      expect(modal.contains(<ModalHeader>Header</ModalHeader>));
    }),
    it("renders footer given prop", () => {
      const props = {
        modalFooter: "Footer"
      };
      const modal = shallow(<Modal {...props} />);
      expect(modal.contains(<ModalFooter>Footer</ModalFooter>));
    });
});
