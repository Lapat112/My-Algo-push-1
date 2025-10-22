import { useState } from "react"

import "./Nav.css"

function Nav() {
  return (
    <>
      <div className="Nav-container ">
        <text className="text-black text-[24px] top-[13px] left-[20px] absolute">Algo</text>
        <div className="UserLogin-button bg-amber-400 w-[2.5rem] h-[2.5rem] absolute top-[13px] left-[96.5%]  rounded-full"></div>
        <input type="text" placeholder="Search" className="Search-bar absolute text-center top-[17px]  left-1/2 transform -translate-x-1/2  w-[31rem] h-[2rem] bg-[#EFEFEF] border-[#DD0000]  border-[1.5px] rounded-2xl"/>
        
      
      
      
      </div>
    
    </>
  )
}

export default Nav
