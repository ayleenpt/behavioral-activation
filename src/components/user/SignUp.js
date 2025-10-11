import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Styles from '../../styles/Styles.module.css'
import '../../styles/user/SignUp.css';

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
    };

    try {
      let body = '';
      console.log('try to register');
      const response = await fetch('http://localhost:8080/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log('payload', body);
      console.log('response', response);
      console.log('response status', response.status);

      const result = await response.text();
      if (response.ok) {
        alert('Registration successful! ✅');
        console.log(result);
        // Redirect to login page after successful signup
        navigate('/login');
      } else {
        alert(`Registration failed: ${result} ❌`);
        console.error(result);
      }
    } catch (err) {
      console.error('Error registering user:', err);
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create Account</h2>

        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button className={`submit-signup-btn ${Styles.blueBackground}`}>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;