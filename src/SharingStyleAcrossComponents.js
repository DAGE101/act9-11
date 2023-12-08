import React, { useState } from 'react';
import {style} from './style';

const SharingStyleAcrossComponents = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in...');
  };

  return (
    <div style={style.FormContainerStyle}>
      <div style={style.TextAlign}>
        <h3>Sharing Style Across Components</h3>
      </div>
      <form>
        <input
          type="text"
          placeholder="Username"
          style={style.InputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={style.InputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin} style={style.ButtonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SharingStyleAcrossComponents;