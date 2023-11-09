import React from 'react';
import LoginModal from './LoginModal';
import Register from './Register';

const ModalManager = ({ showModal, closeModal, modalType }) => {
  return (
    <>
      {modalType === 'login' && (
        <LoginModal show={showModal} handleClose={closeModal} />
      )}
      {modalType === 'register' && (
        <Register show={showModal} handleClose={closeModal} />
      )}
    </>
  );
};

export default ModalManager;
