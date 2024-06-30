// components/UsernameInput.jsx
"use client"
// components/UsernameInput.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../store/userSlice';
import { registerUser } from '../utils/api';

const UsernameInput = () => {
  const [username, setUsernameInput] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setUsernameInput(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      await registerUser(username);
      dispatch(setUsername(username));
    } catch (error) {
      setError('Username already exists or an error occurred. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={handleInputChange} required />
        </label>
        <button type="submit">Submit</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default UsernameInput;
