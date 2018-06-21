import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Modal from "./Modal";
import "./Modal.css";
import Button from "../Button";

storiesOf("Modal", module)
  .add("basic modal", () => (
    <Modal isOpen={true} toggle={action("clicked")}>
      Modal content
    </Modal>
  ))
  .add("warranty modal", () => (
    <Modal
      isOpen={true}
      toggle={action("clicked")}
      modalHeader={true}
      bodyClassName={"warrantyModal"}
      headerClassName={"warrantyHeader"}
    >
      <div>
        <h1>Protect your warranty?</h1>
        <p>
          If you have a lease/hire purchase, your car's warranty may specify
          that only certain makes of tyres are allowed. Choosing tyres not
          recommended by your manufacturers may void your warranty.
        </p>
        <br />
        <p>Would you like to see manufacturer-recommended tyres only?</p>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "30px"
          }}
        >
          <div className="modalButtonDiv">
            <div className="button secondary">
              No, I'd like to see all tyres
            </div>
          </div>

          <div className="modalButtonDiv">
            <div className="button primary">
              Yes, show me manufacturer recommended tyres
            </div>
          </div>
        </div>
      </div>
    </Modal>
  ));
