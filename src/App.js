import React, {useState} from 'react';

function App(){
  
  //First output is current state and second output is function that modifies the current state

  const [count,setCount] = useState(0);

  function decrementCount(){
    setCount(prevCount=>prevCount-1)
    setCount(prevCount=>prevCount-1)
  };

  function increment(){
    setCount(prevCount=>prevCount+1)
  }
return (
    <>
    <button onClick={decrementCount}>-</button>
    <span>{count}</span>
    <button onClick={increment}>+</button>
      </>
  );
}
export default App;