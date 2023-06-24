import React, { useState } from 'react';

function Modal({ children, isOpen, onRequestClose }) {
  const closeModal = () => {
    onRequestClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {children}
            <button onClick={closeModal}>Fermer</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
