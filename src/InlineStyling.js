import React, { useState } from 'react';


const InlineStyling = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Logging in...');
  };

  return (
    <div style={{
      padding: '30px 0px 0px 0px',
      width: '300px',
      margin: 'auto',
    }}>
      <div style={{
        textAlign: 'Center',
      }}>
        <h3>Inline Styling</h3>
      </div>
      <form>
        <input
          type="text"
          placeholder="Username"
          style={{
            
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
          }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          style={{
            
            width: '100%',
            padding: '10px',
            marginBottom: '15px',
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleLogin} style={{
            width: '100%',
            padding: '20px',
            backgroundColor: '#0874d4',
            color: 'white',
            border: 'whites',
            }}>
          Login
        </button>
      </form>
    </div>
  );
};

export default InlineStyling;