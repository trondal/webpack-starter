import React from 'react';

const App = () => {
  const date = new Date();

  return (
    <div>
      <p>{date.toISOString()}</p>
      <h1>
        Welcome to React App thats build using Webpack and Babel separately
      </h1>
    </div>
  );
};

export default App;
