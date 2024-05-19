import { useState,useEffect } from 'react';

export function useCounter(
  initialValue = 0,
  incrementLevel = 1,
  decrementLevel = 1
) {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => {
    setCounter((prev) => prev + incrementLevel);
  };

  const decrement = () => {
    setCounter((prev) => prev - decrementLevel);
  };

  const reset = () => {
    setCounter(initialValue);
  };

  return {
    increment,
    decrement,
    reset,
    counter,
  };
}


export const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (validator) {
      setError(validator(newValue));
    }
  };

  const reset = () => {
    setValue(initialValue);
    setError('');
  };

  return {
    value,
    error,
    setValue,
    handleChange,
    reset
  };
};



export const useTimer = (initialSeconds) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const start = () => {
    setIsActive(true);
  };

  const stop = () => {
    setIsActive(false);
  };

  const restart = () => {
    setIsActive(false);
    setSeconds(initialSeconds);
  };

  return {
    seconds,
    start,
    stop,
    restart,
    isActive
  };
};
