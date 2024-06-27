import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/NewFiles/Css/LoginPage.css'

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-form" >
        <h2>Login</h2>
        <form>
          <div className="login-form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="login-form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <div className="login-options">
          <Link to="/forget-password" className="option-link">Forgot Password?</Link>
          <Link to="/signup" className="option-link">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
