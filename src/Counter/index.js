import React from 'react';
export const Counter = ({counter, setCounter}) => {
  const handleCountPlus = () => {
    setCounter(counter + 1);
    if (counter >= 50) {
      setCounter(0);
    }
  };
  const handleCountMinus = () => {
    setCounter(counter - 1);
    if (counter < 1) {
      setCounter(0);
      alert('limite de numeros');
    }
  };
  return (
    <div>
      <h1>Contador:<span style={{color:'#ff0000', marginLeft:'20px'}}>{counter}</span></h1>
      <button onClick={handleCountMinus}>➖</button>
      <button onClick={handleCountPlus}>✚</button>
      <p>Simples contador até 50.</p>
    </div>
  );
};

//Compartilhamentos de dados via adereços/props.
