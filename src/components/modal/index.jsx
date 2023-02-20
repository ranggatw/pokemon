import React from "react";
import { useModal } from "react-hooks-use-modal";

const Modal = ({ data }) => {
  const [Modal, open, close, isOpen] = useModal("root", {
    preventScroll: true,
    focusTrapOptions: {
      clickOutsideDeactivates: false,
    },
  });
  console.log(data, "details");
  return (
    <div>
      <p>Modal is Open? {isOpen ? "Yes" : "No"}</p>
      <button onClick={open}>OPEN</button>
      <Modal>
        <div style={{ backgroundColor: "white", padding: "40px" }}>
          <h1>Title</h1>
          <p>This is a customizable modal.</p>
          <button onClick={close}>CLOSE</button>
        </div>
      </Modal>
    </div>
  );
};

export default Modal;
