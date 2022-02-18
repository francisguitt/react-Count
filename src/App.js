import React, { useState } from 'react';
import { Counter } from './Counter';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}
