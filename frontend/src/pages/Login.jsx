import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log({ name, email, password, action: state });
    // Add your logic here
  };

  return (
    <div className="login-container">
      <form onSubmit={onSubmitHandler} className="login-form">
        <h2>{state === 'Sign Up' ? "Create Account" : "Login"}</h2>
        <p className="subtext">Please {state === 'Sign Up' ? "sign up" : "log in"} to book an appointment</p>

        {state === 'Sign Up' && (
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        )}

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          {state === 'Sign Up' ? "Create Account" : "Login"}
        </button>

        <p className="toggle-link">
          {state === 'Sign Up' ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}>
            {state === 'Sign Up' ? ' Login' : ' Sign Up'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
