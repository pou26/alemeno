//Register.js

import React, { useState } from 'react';
import "./LoginModal.css"
import { Link } from 'react-router-dom';
const Register = ({ show, handleClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');
 

  const handleRegister = () => {

    console.log('Register with:', fname,lname,email,phone, password);


    handleClose();
  };

  return (
    show && (
      <div className="modal">
        <div className="modal-content">
        
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>Register</h2>
          <form>
            <div className='social'>
              <i className='fas fa-user icon'></i>
            </div>
            <h4 className="titleform">fname:</h4>
            <input type="fname" value={fname} onChange={(e) => setfName(e.target.value)} />
            <h4 className="titleform">lname:</h4>
            <input type="lname" value={lname} onChange={(e) => setlName(e.target.value)} />
            <h4 className="titleform">Email:</h4>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h4 className="titleform">phone:</h4>
            <input type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <h4 className="titleform">Password:</h4>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="loginbtn" onClick={handleRegister}>Register</button>
            <Link to="/login">log in</Link>
          </form>
        </div>
      </div>
    )
  );
};

export default Register;
