'use client';
import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState<number>(0);
  const countUp = () => {
    setCount((i) => ++i);
  };
  return (
    <>
      <h2>カウンター</h2>
      <div>Count: {count}</div>
      <button onClick={countUp}>+</button>
    </>
  );
};
