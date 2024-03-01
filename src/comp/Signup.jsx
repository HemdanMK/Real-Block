import React, { useState, useEffect } from 'react';
import GoHomeButton from './GoHomeButton';
import Navbar from './Navbar';
const SignUpLogin = () => {
  const [connectedAccount, setConnectedAccount] = useState(null);

  const fetchConnectedAccount = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setConnectedAccount(accounts[0]);
        } else {
          setConnectedAccount(null);
        }
      }
    } catch (error) {
      console.error('Error fetching connected account:', error);
    }
  };

  useEffect(() => {
    fetchConnectedAccount();

    const handleAccountsChanged = (newAccounts) => {
      setConnectedAccount(newAccounts[0]);
    };

    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
    }

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
      }
    };
  }, []);

  const handleRegisterClick = () => {
    const container = document.getElementById('container');
    container.classList.add('active');
  };

  const handleLoginClick = () => {
    const container = document.getElementById('container');
    container.classList.remove('active');
  };

  return (
    <div><Navbar></Navbar>
    <div className={`container active`} id="container">
      
      
      <div className={`form-container sign-in`}>

        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {/* <p>{connectedAccount ? `Connected Account : ${connectedAccount}` : 'Not Connected'}</p> */}
          <div className="account-info-container">
            <p>
              <span className="label">Connected Account: </span>
              <span className="address" style={{ color: connectedAccount ? 'red' : 'black' }}>
              {connectedAccount || 'Not Connected'}
              </span>
            </p>
          </div>



          <a href="#">Forget Your Password?</a>
          <button onClick={handleLoginClick}>Sign In</button>
        </form>
      </div>
      <div className={`form-container sign-up`}>
      {/* <GoHomeButton/> */}
        <form>
          <h1 style={{color:'black'}}>Create Account</h1>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button onClick={handleRegisterClick}>Register</button>
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={handleLoginClick}>Sign In</button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello, Friend!</h1>
            <p>Register with your personal details to use all site features</p>
            <button className="hidden" onClick={handleRegisterClick}>Sign Up</button>
            {/* <GoHomeButton></GoHomeButton> */}
          </div>
        </div>
      </div>
      <style>
        {`
         @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
         
      
         body {
          background-color: #ffffff;
          background: linear-gradient(white, #faf4d3);
          display: flex;
          align-items: center;
          justify-content: left;
          flex-direction: column;
          height: auto;
          color: #333;
          min-height: 100vh;
          overflow:hidden;
        }
      
       .container {
         background-color: #fff;
         border-radius: 0px;
        //  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.35);
         position: relative;
         overflow: hidden;
         width: 100%; /* Change width to 100% */
         min-width: 1800px; /* Adjust min-width as needed */
         height: 91vh;
         min-height:750px
         
       }
      
        
         .container p{
             font-size: 14px;
             line-height: 20px;
             letter-spacing: 0.3px;
             margin: 20px 0;
         }
        
         .container span{
             font-size: 12px;
         }
        
         .container a{
             color: #333;
             font-size: 13px;
             text-decoration: none;
             margin: 15px 0 10px;
         }
        
         .container button{
             background-color: #ffd900;
             color: #fff;
             font-size: 12px;
             padding: 10px 45px;
             border: 1px solid transparent;
             border-radius: 8px;
             font-weight: 600;
             letter-spacing: 0.5px;
             text-transform: uppercase;
             margin-top: 10px;
             cursor: pointer;
         }
        
         .container button.hidden{
             background-color: transparent;
             border-color: #fff;
         }
        
         .container form{
             background-color: #fff;
             display: flex;
             align-items: center;
             justify-content: center;
             flex-direction: column;
             padding: 0 40px;
             height: 100%;
         }
        
         .container input{
             background-color: #eee;
             border: none;
             margin: 8px 0;
             padding: 10px 15px;
             font-size: 13px;
             border-radius: 8px;
             width: 60%;
             outline: none;
             transition: background-color 5s;
         }
        
         .form-container{
             position: absolute;
             top: 0;
             height: 100%;
             transition: all 0.6s ease-in-out;
         }
        
         .sign-in{
             left: 0;
             width: 50%;
             z-index: 2;
         }
        
         .container.active .sign-in{
             transform: translateX(100%);
         }
        
         .sign-up{
             left: 0;
             width: 50%;
             opacity: 0;
             z-index: 1;
         }
        
         .container.active .sign-up {
           transform: translateX(100%);
           opacity: 1;
           z-index: 5;
           animation: move 0.6s;
      
           @keyframes move {
               0%, 49.99% {
                   opacity: 0;
                   z-index: 1;
               }
               50%, 100% {
                   opacity: 1;
                   z-index: 5;
               }
           }
       }
      
        
         
        
         .toggle-container{
             position: absolute;
             top: 0;
             left: 50%;
             width: 50%;
             height: 100%;
             overflow: hidden;
             transition: all 0.6s ease-in-out;
             border-radius: 150px 0 0 100px;
             z-index: 1000;
         }
        
         .container.active .toggle-container{
             transform: translateX(-100%);
             border-radius: 0 150px 100px 0;
         }
        
         .toggle{
             background-color: #503a83;
             height: 100%;
             background: linear-gradient(to right, #37e7ca, #246b7e);
             color: #fff;
             position: relative;
             left: -100%;
             height: 100%;
             width: 200%;
             transform: translateX(0);
             transition: all 0.6s ease-in-out;
         }
        
         .container.active .toggle{
             transform: translateX(50%);
         }
        
         .toggle-panel{
             position: absolute;
             width: 50%;
             height: 100%;
             display: flex;
             align-items: center;
             justify-content: center;
             flex-direction: column;
             padding: 0 30px;
             text-align: center;
             top: 0;
             transform: translateX(0);
             transition: all 0.6s ease-in-out;
         }
        
         .toggle-left{
             transform: translateX(-200%);
         }
        
         .container.active .toggle-left{
             transform: translateX(0);
         }
        
         .toggle-right{
             right: 0;
             transform: translateX(0);
         }
        
         .container.active .toggle-right{
             transform: translateX(200%);
         }
          .form-container p {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .form-container p {
            font-size: 14px;
            margin-bottom: 10px;
          }
          .go-home-button {
            position: absolute;
            top: 10px;
            right:180px;
            background-color: #512da8;
            color: #fff;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          .account-info-container {
            border: 2px solid black;
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
          }
          
          .account-info-container p {
            margin: 0;
          }
          
          .account-info-container .label {
            color: black; /* Set the label text color to black */
          }
          
          .account-info-container .address {
            font-weight: bold; /* Optionally make the address text bold */
          }
          
          
         
          
        `}
      </style>
    </div>
    </div>
  );
};

export default SignUpLogin;
