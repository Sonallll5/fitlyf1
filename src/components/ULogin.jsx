import React, { useState } from 'react';
import backgroundImage from './wap.jpg'; // Assuming you have the background image file

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      // Successful login logic, for example, redirecting to another page
      console.log('Login successful');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover', // Cover the entire viewport
      }}
    >
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.2)', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Page</h2>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: '100%', padding: '10px', fontSize: '16px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </div>
        <div style={{ marginBottom: '20px', color: 'red', textAlign: 'center' }}>{error}</div>
        <button onClick={handleLogin} style={{ width: '100%', padding: '10px', fontSize: '16px', backgroundColor: '#007bff', color: '#fff', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Login</button>
      </div>
    </div>
  );
}

export default LoginPage;







