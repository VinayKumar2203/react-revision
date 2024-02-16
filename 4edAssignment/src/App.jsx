import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function MyComponent() {
  function handleButton() {
    alert("Hello")
   }
  
  return(
    <>
      <div className='main'>
         <p>

         </p>
         <button onClick={handleButton}> click me </button>
      </div>

    </>
  )
  }

function App() {
  const [count, setCount] = useState(0)
 function handleClick() {
  alert("Hello")
 }
  return (
    <>
    <MyComponent />
     <p>React is a javascript library</p>
     <p>Click the below button to alert 'Hello'</p>
     <button onClick={handleClick}>Alert Hello</button>
    </>
  )
}

export default App
