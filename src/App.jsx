import React, { useState } from 'react';
import Map from './pages/Map';
import './pages/map.css';

function App() {
  const [isClickable, setClickable] = useState([
    { planet: false },
    { planet: false },
    { planet: false },
  ]);
  return (
    <div>
      <Map isClickable={isClickable} />
    </div>
  );
}

export default App;