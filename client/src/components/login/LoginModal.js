

import React, { useState } from 'react';
import "./LoginModal.css"

const LoginModal = ({ show, handleClose }) => {

 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async(e) => {
    e.preventDefault();

    const res= await fetch('/login',{
      method:"POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });

    const data= res.json();

    if(res.status===400 || !data){
      window.alert("Invalid");
    }else{
      window.alert("login successful");
      
    }

    handleClose();
  };

  return (
    show && (
      <div className="modal">
        <div className="modal-content">
        
          <span className="close" onClick={handleClose}>
            &times;
          </span>
          <h2>Login</h2>
          <form method = "POST">
            <div className='social'>
              <i className='fas fa-user icon'></i>
            </div>
            <h4 className="titleform">Email:</h4>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <h4 className="titleform">Password:</h4>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button className="loginbtn" onClick={handleLogin}>Login</button>
            
          </form>
        </div>
      </div>
    )
  );
};

export default LoginModal;
