import './App.css';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0)
  const countPlus = () => {
    setCount(count + 1)
  }
  const countMinus = () => {
    setCount(count - 1)
  }
  return (
    <div className="App">
      <p>{count}</p>
      <button className="btn-p" onClick={countPlus}>Plus</button>
      <button className="btn-m" onClick={countMinus}>Minus</button>
    </div>
  );
}

export default App;
