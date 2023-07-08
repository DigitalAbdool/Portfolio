import React from 'react';
import { useState } from 'react';

function App() {

  const [count, setCount] = useState(0);

  function add() {
    setCount(prevCount => prevCount + 1)
  }

  function minus() {
    setCount(prevCount => prevCount - 1)
  }
  return(
    <div>
      <button className='counter-minus' onClick={minus}>-</button>
      <div className='counter-result'>
        <h2>{count}</h2>
      </div>
      <button className='counter-plus' onClick={add}>+</button>
    </div>
  )
}

export default App;