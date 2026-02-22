import { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Cardai from './components/Cardai';



function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    name: 'John',
    age: 30,
    city: 'New York'
  }
  let newArr = [1, 2, 3, 4, 5];

  return (
    <>
      <h1 className="text-3xl font-bold underline bg-red-500 rounded-xl">
        Hello Tailwind CSS!
      </h1>

      <br />
      <br />
      <Card first="dartanew" second={myObj} third={newArr} />

      <br />
      <br />
      <Cardai/>
   
    </>
  );
}

export default App
