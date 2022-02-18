import React from 'react';
export const Counter = (props) => {
  const handleCountPlus = () => {
    props.setCount(props.count + 1);
    if (props.count >= 50) {
      props.setCount(0);
    }
  };
  const handleCountMinus = () => {
    props.setCount(props.count - 1);
    if (props.count < 1) {
      props.setCount(0);
      alert('limite de numeros');
    }
  };
  return (
    <div>
      <h1>Contador: {props.count}</h1>
      <button onClick={handleCountMinus}>➖</button>
      <button onClick={handleCountPlus}>✚</button>
    </div>
  );
};

//Compartilhamentos de dados via adereços/props.
