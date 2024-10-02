import { Modal } from "antd";
import React from "react";

const MessagesPopup = ({ open, onClose, children }) => {
  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      title={null}
      closable={false}
    >
      {children}
    </Modal>
  );
};

export default MessagesPopup;
