import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header() {
  return(
    <>
      <h1>this is a header  </h1>
    </>
  )
}
function Footer({message}) {
  return(
    <>
      <h1>Footer {message} </h1>
    </>
  )
}
function Content({content}) {
  return(
    <>
      <h1>Content {content}</h1>
    </>
  )
}

function App() {
  let message="this is a footer"
  let content="this is a content"
  return (
    <>
      <Header />
      <Footer message={message}/>
      <Content  content={content}/>
    </>
  )
}

export default App
