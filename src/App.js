import React from 'react';
import GlobalStyle from './GlobalStyle';
import Todo from './components/Todo';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Todo />
    </div>
  );
};

export default App;