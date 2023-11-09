import React, { useState } from 'react';
import LoginModal from '../login/LoginModal';

const Head = () => {
  const [showModal, setShowModal] = useState(false);

  const handleIconClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <section className='head'>
        <div className='container flexSB'>
          <div className='logo'>
            <h1>ACADEMIA</h1>
            <span>ONLINE EDUCATION & LEARNING</span>
          </div>
          <div>
      <div className='social'>
        <i className='fas fa-user icon' onClick={handleIconClick}></i>
      </div>
      <LoginModal show={showModal} handleClose={handleCloseModal} />
    </div>
        </div>
      </section>
    </>
  )
}

export default Head 