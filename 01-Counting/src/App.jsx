import './App.css'
import { useState } from 'react'

function App() {
  
  const [count, setCount] = useState(0)

  const addCount = async () => {
    setCount(count + 1)
  }

  const subtractCount = async () => {
    setCount(count - 1)
  }

  const resetCount = async () => {
    setCount(0)
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h2>{count}</h2>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <button onClick={resetCount}>Reset</button>
      </div>
    </>
  )
}

export default App
