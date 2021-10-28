import React, { useState } from 'react';
import Button from './Button';

const Counter: React.FC = () => {
  // Hooks
  // - - - state
  const [count, setCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  // Custom functions
  // - - - incement ()
  const increment = (): void => {
    if (count <= 9) {
      setCount(count + 1);
    } else {
      setMessage('You reached max count');
    }
  };
  /////////  decrement ()
  const decrement = (): void => {
    if (count === 10) setMessage('');
    if (count > 0) setCount(count - 1);
  };
  return (
    <div>
      <h1>Counter: {count}</h1>
      <Button text='+1' action={increment} />
      <Button text='-1' action={decrement} />
      {message && <p>{message}</p>}
    </div>
  );
};

export default Counter;
