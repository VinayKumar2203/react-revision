import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyComponent() {
  const [count, setCount] = useState(0)
  let handleClick =()=>{np
    setCount(count+1)
  }
  return(
    <div>
          <p>this is count{count}</p>
          <button onClick={handleClick}> updateCount</button>
    </div>
  )
}
function App() {
  return (
    <>
       <h1>hello vinay </h1>   
        <MyComponent />

    </>
  )
}

export default App
