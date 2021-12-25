import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [display, setDisplay] = useState(false);

  const handleClick = e => {
    if (e.target.id === 'up') {
      setDisplay(true)
      setCount(count + 1)
    }

    if (e.target.id === 'down') {
      if (count > 0) {
        setCount(count - 1)
      }
      if (count <= 1) {
        setDisplay(false)
      }
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      {display ? <h1>{count}</h1> : null}

      <button
        id="up"
        onClick={handleClick}
        data-testid='up'
      >
        Up
      </button>

      <button
        id="down"
        onClick={handleClick}
        data-testid='down'
      >
        Down
      </button>
    </div>
  );
};

export default Counter;
