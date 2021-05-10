import { useEffect, useState, useRef } from 'react';

const FunctionalComponent = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState('');

  const handleClick = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log('Now we are using useEffect for button');
  }, [counter]);

  useEffect(() => {
    console.log('Now we are using useEffect for text');
  }, [text]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className="function">
      <h2>Functional Component</h2>
      <p>Counter : {counter}</p>
      <button onClick={handleClick}>Increase</button>
      <input type="text" value={text} onChange={handleChange} />
    </div>
  );
};

export default FunctionalComponent;
