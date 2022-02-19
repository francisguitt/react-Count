import React from 'react';
export const Mirror = ({ counter, setCounter }) => {
  return (
    <div>
      <h1>
        Multiplicador:
        <span style={{ color: '#ff0000', marginLeft: '20px' }}>
          {counter * 2}
        </span>
      </h1>
      <p>Multiplicador / 2</p>
    </div>
  );
};
