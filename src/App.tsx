import React from 'react';
import ExampleCounter from './components/ExampleCounter';

const App = () => {
  const date = new Date();

  return (
    <div>
      <h1>
        Welcome to React App thats build using Webpack and Babel separately
      </h1>
      <ExampleCounter text="Click me" />
    </div>
  );
};

export default App;
