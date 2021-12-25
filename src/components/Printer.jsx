import React, {useState} from 'react';

const Printer = () => {
  const [message, setMessage] = useState('');
  const [printedMessage, setPrintedMessage] = useState('');
  const [display, setDisplay] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = e => {
    setIsDisabled(false)
    setMessage(e.target.value)
  }

  const handleClick = e => {
    if (e.target.id === 'print' && message !== '') {
      setPrintedMessage(message)
      setMessage('')
      setDisplay(true)
      setIsDisabled(true)
    }
  }

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      {display ? <h3>{printedMessage}</h3> : null}

      <input
        type="text"
        placeholder='Type a message!'
        value={message}
        onChange={handleChange}
      />

      <button
        id="print"
        onClick={handleClick}
        data-testid='print'
        disabled={isDisabled}
      >
        Print
      </button>

    </div>
  );
};

export default Printer;
