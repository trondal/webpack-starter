import React from 'react';
import './exampleStyle.css';

interface Props {
  text: string;
}
function ExampleCounter({ text }: Props) {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount(count + 1)}>
        {text}
      </button>
    </div>
  );
}

export default ExampleCounter;
