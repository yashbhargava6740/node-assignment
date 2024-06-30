// components/UsernameInput.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../store/userSlice';

const UsernameInput = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setUsername(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter username"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UsernameInput;
