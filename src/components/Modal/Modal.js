// @flow
import * as React from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

type Props = {
  isOpen: boolean,
  toggle: () => void,
  className?: string,
  modalHeader?: string,
  modalFooter?: string,
  children: React.Node,
  bodyClassName?: string,
  headerClassName?: string
};

const ourModal = (props: Props) => (
  <Modal
    isOpen={props.isOpen}
    toggle={props.toggle}
    className={props.className}
  >
    {props.modalHeader && (
      <ModalHeader className={props.headerClassName} toggle={props.toggle}>
        {props.modalHeader}
      </ModalHeader>
    )}
    <ModalBody className={props.bodyClassName}>{props.children}</ModalBody>
    {props.modalFooter && <ModalFooter>{props.modalFooter}</ModalFooter>}
  </Modal>
);

export default ourModal;
