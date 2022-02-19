import React, { useState } from 'react';
import { Counter } from './Counter';
import './style.css';

export default function App() {
  
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <Counter counter={counter}
       setCounter={setCounter} />
    </div>
  );
}
