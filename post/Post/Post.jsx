import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { usePostStore } from '../Store post/Store'

import React from 'react'
import './Post.css'

function Post() {
  const [head, setHeadInput] = useState('')
  const [detail, setDetailInput] = useState('')
 
  const {setHead, setDetail } = usePostStore()
  const navigate = useNavigate()



  const Posthere = () => {
    setHead(head)
    setDetail(detail)
    navigate('/')
  }

  
  return (


    
    <div className='Enter-information'>
      
      <input type="text" placeholder="Head Post" className="post-input top-[2rem] absolute"  value={head} onChange={(e)=> setHeadInput(e.target.value)}/>
    
      <textarea placeholder="Detal" className="w-[400px] h-[120px] top-[5rem] absolute text-lg p-3 rounded-lg border border-gray-300 resize-none align-top" value={detail} onChange={(e) => setDetailInput(e.target.value)} />
    
      <div className="post-actions bg-amber-500 w-[3rem] top-[13rem] absolute cursor-pointer" onClick={Posthere}>POST</div>
      
      <div className='Mi'>{Posthere}</div>

    </div>
  )
}

export default Post
