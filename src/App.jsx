import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Nav from './Nav/Nav.jsx'
import Main from './Main/Main.jsx'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main />
      <Nav />
    </>
  )
}

export default App
