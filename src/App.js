import React, { useState } from 'react';
import './App.css'; // Make sure this is the correct path to your CSS file

function App() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const apiUrl = process.env.NODE_ENV === 'production'
    ? 'https://your-production-api-url'
    : 'http://localhost:5001';

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);  // Show success message
      } else {
        setMessage('Failed to register. Please try again.');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
    }
  };

  return (
    <div className="container">
      <h1>Email Registration</h1>
      <img src="./your-animal-image.jpg" alt="Your Animal" /> {/* Make sure the image path is correct */}
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email" 
          required 
        />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default App;
