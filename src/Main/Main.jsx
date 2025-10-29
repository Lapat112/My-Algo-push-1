import { useState } from "react"


import "./Main.css"

function Main() {
  return (
    <>
      <mian className="main-container">  
        <div className="main-container-1 ">
          <text className="text-[28px] font-bold  absolute top-[5rem] left-[51rem] "> Algo เว็บไซต์ขายงาน</text> 
          <text className="text-[22px] text-[#0077FF] absolute top-[8rem] left-[45rem] font-serif">เว็บไซต์สำหรับโพสขายงานต่างๆเกี่ยวกับเทคโนโลยี</text>          
          </div> 
        <div className="content bg-[#DA3030] w-[100%] h-[15rem] top-[13.5rem] border-[#9e9e9e] border-1 relative shadow-[0_4px_10px_rgba(0,0,0,0.5)]"> </div>   
          
          <div className="main-container-2 ">
            <section className="advert">
              <div className="left-box1 bg-[#D9D9D9] w-[40rem] h-[10rem] absolute top-[2.8rem] left-[18rem] rounded-[20px]  "></div>
              <div className="left-box2 bg-[#D9D9D9] w-[40rem] h-[10rem] absolute top-[14rem] left-[18rem] rounded-[20px]  "></div>
              
              <div className="right-box1 bg-[#D9D9D9] w-[20rem] h-[21.4rem] absolute top-[2.8rem] left-[59.5rem] rounded-[20px]  "></div>
              <div className="right-box2 bg-[#D9D9D9] w-[20rem] h-[21.4rem] absolute top-[2.8rem] left-[80.5rem] rounded-[20px]  "></div>
                <div className="main-container-3 ">
                  <text className="text-[24px] font-bold absolute top-[2rem] left-[56rem] font-sans "> สินค้า</text>
                  <div className="product-box1 bg-[#DA3030] w-[109.5rem] h-[0.3rem] absolute top-[4.7rem] left-[2.5rem] rounded-2xl   "></div>
                   
                    <div className="Shop-container"></div>
                        <section className="shop-item1 bg-[#ffffff] w-[23rem] h-[23rem] absolute top-[8rem] left-[8rem] rounded-[20px] border-1 border-black shadow-[#636262] shadow-xl"></section>
                        <section className="shop-item2 bg-[#ffffff] w-[23rem] h-[23rem] absolute top-[8rem] left-[33.5rem] rounded-[20px] border-1 border-black shadow-[#636262] shadow-xl"></section>
                        <section className="shop-item3 bg-[#ffffff] w-[23rem] h-[23rem] absolute top-[8rem] left-[58.78rem] rounded-[20px] border-1 border-black shadow-[#636262] shadow-xl"></section>
                        <section className="shop-item4 bg-[#ffffff] w-[23rem] h-[23rem] absolute top-[8rem] left-[84rem] rounded-[20px] border-1 border-black shadow-[#636262] shadow-xl"></section>


                </div>
            
            </section>

          




     
                
       

            </div>
              



      </mian>
    </>
  )
}

export default Main
