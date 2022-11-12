import React, { useState } from 'react';
import Context from './app-context';
import Counter from './Counter';

export default function ContainerContext() {
    const [total, setTotal] = useState(0);

  return (
    <Context.Provider value={[total, setTotal]}>
      <div>
        <p>  Context API</p>
        <Counter></Counter>
        <Counter></Counter>
      </div>
    </Context.Provider>
  );
}