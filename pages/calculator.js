// shouldComponentUpdate in Functional React component

import { memo, useState } from 'react';

function Parent() {
  const [counter, setCounter] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter1(counter1 + 1)}>Increment 1</button>
      <button onClick={() => setCounter2(counter2 + 1)}>Increment 2</button>
      <ChildMemo
        counter={counter}
        counter1={counter1}
        counter2={counter2}
      />
    </div>
  );
}

function Child({ counter, counter1, counter2 }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>{counter}</p>
      <p>{counter1}</p>
      <p>{counter2}</p>
    </div>
  );
}

// If prevProps.counter === nextProps.counter is true component will not rerender, for false it will re-render
const ChildMemo = memo(
  Child,
  (prevProps, nextProps) => prevProps.counter === nextProps.counter
);

export default Parent;
