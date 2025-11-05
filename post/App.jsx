import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Post from './Post/Post.jsx'
import Main from './Main/Main.jsx'


import './App.css'

function App() {


  return (
    <>
      
      <Routes>
         <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  )
}

export default App
