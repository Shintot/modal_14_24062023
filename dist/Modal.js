import React, { useState } from 'react';
function Modal({
  children,
  isOpen,
  onRequestClose
}) {
  const closeModal = () => {
    onRequestClose();
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, isOpen && /*#__PURE__*/React.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal-content"
  }, children, /*#__PURE__*/React.createElement("button", {
    onClick: closeModal
  }, "Fermer"))));
}
export default Modal;