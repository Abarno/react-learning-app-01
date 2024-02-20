import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
  }

  const reduceValue = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>{" "}
      <button onClick={reduceValue}>Reduce Value</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
