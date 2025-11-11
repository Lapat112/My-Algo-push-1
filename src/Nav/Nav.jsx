import { useState } from "react"

import "./Nav.css"

function Nav() {
  return (
    <>
      <div className="Nav-container ">
        <text className="text-black text-[20px] top-[13px] left-[20px] absolute">Algo</text>
        <div className="Post-button w-[1.6rem] h-[1.6rem] absolute top-[17px] left-[96.5%] text-[20px]  rounded-[10px] "><img src="/src/Nav/write.png" alt="" /></div>
        <input type="text" placeholder="Search" className="Search-bar absolute text-center top-[17px]  left-1/2 transform -translate-x-1/2  w-[31rem] h-[1.7rem] bg-[#EFEFEF] border-[#DD0000]  border-[1.5px] rounded-2xl"/>
        
      
      
      
      </div>
    
    </>
  )
}

export default Nav
