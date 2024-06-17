import React, { useState } from 'react';

import './App.css';
import Home from './components/Home';
import Scene from './components/Scene';

export default function App() {
  const [showScene, setShowScene] = useState(false);

  return (
    <div>
      {showScene ? (
        <div className="canvas-container">
          <Scene />
        </div>
      ) : (
        <Home onStart={() => setShowScene(true)} />
      )}
    </div>
  );
}
