import React from 'react';
import {useInput} from '../../hooks/hook';

const UseInput = () => {
  const emailValidator = (value) => {
    const isValid = /\S+@\S+\.\S+/.test(value);
    return isValid ? '' : 'Введите корректный email';
  };

  const emailInput = useInput('', emailValidator);

  return (
    <div>
      <input
        style={{marginTop: 20}}
        type="email"
        value={emailInput.value}
        onChange={emailInput.handleChange}
      />
      {emailInput.error && <p>{emailInput.error}</p>}
    </div>
  );
};

export default UseInput;