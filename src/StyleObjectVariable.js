import React, { useState } from 'react';

const formContainerStyle = {
  padding: '30px 0px 0px 0px',
  width: '300px',
  margin: 'auto',
};

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '15px',
};

const buttonStyle = {

  width: '100%',
  padding: '20px',
  backgroundColor: '#0874d4',
  color: 'white',
  border: 'whites',
};

const textAlign = {
  textAlign: 'Center',
};

const StyleObjectVariable = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in...');
  };

  return (
    <div style={formContainerStyle}>
      <div style={textAlign}>
        <h3>Style Object Variable</h3>
      </div>
      <form>
        <input
          type="text"
          placeholder="Username"
          style={inputStyle}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin} style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
  );
};

export default StyleObjectVariable;