import React from 'react';

interface Props {
  text: string;
}
const ExampleCounter = ({ text }: Props) => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>{text}</button>
    </div>
  );
};

export default ExampleCounter;
