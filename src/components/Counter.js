import React from 'react';
import {Button} from 'react-bootstrap';

const { useState } = React

const Counter = ({ increment, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(increment)
  }
  return <button onClick={handleClick}>+{increment}</button>
}

const App = () => {
  const [count, setCount] = useState(0)

  const incrementCount = increment => {
    setCount(count + increment)
  }
 
  if (App > 4) {
      alert('more than four')
  }

  return (
    <div>
      <Button increment={1} onClickFunction={incrementCount} />
      
      <span>{count}</span>
    </div>
  )
}



export default Counter;