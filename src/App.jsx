import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Posts from './Posts'
import Post from './Post'
// import Todo from './Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Core Concept Recap</h1>
      <ol>
        <li>Components:</li>
        <li>JSX</li>
        <li>Props</li>
        <li>Event Handler</li>
        <li>State</li>
        <li>Load Data</li>

      </ol>
      <hr />
      {/* <Todo></Todo> */}
      <Posts></Posts>
      <Post></Post>
    </>
  )
}

export default App
