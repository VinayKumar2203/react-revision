import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function JsxShowcase() {
  let Name = "vinay"//Variables
  function newFun() {//function
    return (
      <>
        <h2>what are you doing</h2>
      </>
    )
  }
  let numbers = [1, 2, 3, 4, 5, 6, 7];

  return (
    <div>
      <p> hello {Name} {newFun()}</p>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <button>button</button>
    </div>
  )
}

function App() {

  return (
    <>
      <h1>vinay kumar</h1>
      <JsxShowcase />
    </>
  )
}

export default App
