import { useState } from 'react'
import './App.css'

function Greeting({message,name}) {
  return(
    <>
      <p>{message} {name}</p>
    </>
  )
}

function App() {
  let message="hello"
  let name="viany"
  return (
    <>
      <h1>vinay;Basic Greeting Component</h1>
      <Greeting message={message} name={name}/>
    </>
  )
}

export default App
