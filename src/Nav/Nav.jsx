import { useState } from "react"
import{ Link } from "react-router-dom"


import "./Nav.css"

function Nav() {
  return (
    <>
      <div className="Nav-container ">
        <text className="text-black text-[21px] top-[13px] left-[20px] absolute">Algo</text>

        <Link to="/post">
        <div  className="Post-button w-[3rem] h-[2rem] absolute top-[17px] left-[96.5%] text-[20px]  rounded-[10px] flex justify-center items-center  "><img src="/src/Nav/write.png" className="w-[26px]" /></div>
        </Link>

        <input type="text" placeholder="Search" className="Search-bar absolute text-center top-[17px]  left-1/2 transform -translate-x-1/2  w-[31rem] h-[1.7rem] bg-[#f7f7f7] border-[#DD0000]  border-[1.5px] rounded-2xl"/>
        
      
      
      
      </div>
    
    </>
  )
}

export default Nav
