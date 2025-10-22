import { useState } from "react"

import "./Nav.css"

function Nav() {
  return (
    <>
      <div className="Nav-container ">
        <text className="text-black text-[22px] top-[13px] left-[20px] absolute">Algo</text>
        <div className="UserLogin-button bg-amber-400 w-[2.2rem] h-[2.1rem] absolute top-[13px] left-[96.5%]  rounded-full"></div>
        <input type="text" placeholder="Search" className="Search-bar absolute text-center text-black top-[17px]  left-1/2 transform -translate-x-1/2  w-[30rem] h-[1.6rem] bg-[#EFEFEF] border-[#DD0000]  border-[1.5px] rounded-2xl"/>
        
      
      
      
      </div>
    
    </>
  )
}

export default Nav
