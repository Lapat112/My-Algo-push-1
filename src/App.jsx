import { useState } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'

import './App.css'
import Nav from './Nav/Nav.jsx'
import Main from './Main/Main.jsx'
import Post from './Post/Post.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Routes>  
        <Route path='/' element={<Main />}/>
        
        <Route path='/post' element={<Post />}/>
      </Routes>      
      
    </>
  )
}

export default App
