import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="emoji">🐳</div>
        <h1>React + Docker</h1>
        <p>Ta aplikacja działa w kontenerze Docker!</p>
        
        <div className="info-box">
          <p><strong>Czas:</strong> {time}</p>
          <p><strong>Counter:</strong> {count}</p>
          <button onClick={() => setCount(count + 1)}>
            Kliknij mnie! 🚀
          </button>
          <button onClick={() => setCount(0)} style={{marginLeft: '10px'}}>
            Reset
          </button>
        </div>

        <div className="tech-stack">
          <h3>Tech Stack:</h3>
          <ul>
            <li>⚛️ React 18</li>
            <li>🐳 Docker (multi-stage build)</li>
            <li>🌐 Nginx (production server)</li>
            <li>💻 Homelab deployment</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
