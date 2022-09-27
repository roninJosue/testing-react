import React, {useState} from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);
  const [showValue, setShowValue] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <p>The current value is <span data-testid="counter-value">{value}</span></p>
      <p>
        <button onClick={() => setValue(value + 1)}>+</button>
        <button onClick={() => setValue(value - 1)}>-</button>
        <button onClick={() => setTimeout(() => setShowValue(true), 500)}>Show it</button>
      </p>
      {showValue && <p></p>}
    </div>
  );
};


export default Counter;
