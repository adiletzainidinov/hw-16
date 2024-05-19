import React from 'react';
import { useCounter } from '../../hooks/hook';
import Button from '../UI/Button';

const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(0, 4, 2);

  return (
    <>
      <Button onClick={() => increment()}>4</Button>
      <p>{counter}</p>
      <Button onClick={() => decrement()}>2</Button>
      <Button style={{ marginLeft: 20 }} onClick={() => reset()}>
        reset
      </Button>
    </>
  );
};

export default Counter;
