import React from 'react';
import { useTimer } from '../hooks/hook';
import Button from './UI/Button';

const Timer = ({ initialMinutes }) => {
  const initialSeconds = Number(initialMinutes) * 60;

  const timer = useTimer(initialSeconds);

  const minutes = Math.floor(timer.seconds / 60);
  const seconds = timer.seconds % 60;

  return (
    <div>
      <p>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</p>
      <Button onClick={timer.start} disabled={timer.isActive}>Start</Button>
      <Button onClick={timer.stop} disabled={!timer.isActive}>Stop</Button>
      <Button onClick={timer.restart}>Restart</Button>
    </div>
  );
};

export default Timer;


