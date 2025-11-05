import { useState } from 'react'
import { Link } from 'react-router-dom'
import { usePostStore } from '../Store post/Store'

import React from 'react'
import Post from '../Post/Post'

function Main() {
  const {head} = usePostStore()
  const {detail} = usePostStore()
    

  return (
    <>
      <div>Main Component</div>
      <Link to="/post">Go to Post</Link>
      

      <div className="main-content w-[35rem] h-[35rem] bg-[#ffffffaa] border-2 border-[#000000] rounded-[20px] left-2 absolute">
          
        <div className="Detal bg-[#2589c4] w-[32rem] h-[16rem] absolute top-11 left-5"></div>
        <div className="Head bg-[#ffcc00] w-[32rem] h-[1.6rem] absolute top-80 left-5 text-[17px]  ">{head}</div>
        <div className="Detal bg-[#00ff00] w-[32rem] h-[5rem] absolute top-88 left-5 text-[15px] text-[#000000a9] ">{detail}</div>
        <div className="Detal bg-[#ff00ff] w-[32rem] h-[2rem] absolute top-128 left-5 text-[15px] text-[#000000a9] ">
          <div className="star">⭐⭐⭐⭐⭐</div>
        <div className="Button-money w-[8rem] h-[1.4rem] bg-amber-400 absolute left-[21rem] top-[1px] rounded-[20px] border-1 border-[#00000054] text-[#000000] justify-center ">100฿</div>
        </div>
          



      </div>
    </>
  )
}

export default Main
