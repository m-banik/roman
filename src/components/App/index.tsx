import React from 'react';
import { NumberConverter } from '..';
import './styles.css';

export function App() {
  return (
    <div className="App">
      <h1>Number systems app!</h1>
      <NumberConverter />
      <NumberConverter targetSystem={'arabic'} />
    </div>
  );
}

export default App;
