import { useState } from 'react'
import './App.css'

function ItemList({ item }) {
  let items = ["apple", "Banana", "Cherry"];
  return (
    <>
      <ul>
        {items.length > 0 ? 
          items.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        : 'NO items found'}
      </ul>
    </>
  )
}

function App() {

  return (
    <>
      <ItemList />
    </>
  )
}

export default App
