import { useState } from 'react';
import './App.css';

function App() {
  
  const [count, setCount] = useState(15)

  const addValue=()=>{
    if(count<20)
    setCount(count+1)
    console.log(count)
  }

  const removeValue=()=>{
    if(count>0)
    setCount(count-1)
    console.log(count)
  }
  return (
    <>
      <h1>atta aur react</h1>
      <h2>Counter value  :{count}</h2>

      <button  onClick={addValue}>Add Value{count}</button>
      <br /><br />
      <button onClick={removeValue}>remove value </button>
    </>
  )
}

export default App
