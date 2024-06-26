"use client"
import React, { useState, useEffect } from 'react'
import { CgProfile } from "react-icons/cg";
import { RiShoppingCart2Line } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    
  const [navSize, setnavSize] = useState("h-[6rem]");
  const [navColor, setnavColor] = useState("bg-transparent");
  const [textColor, setTextColor] = useState("text-black");

  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("bg-black") : setnavColor("bg-transparent");
    window.scrollY > 10 ? setnavSize("h-[5rem]") : setnavSize("h-[6rem]");
    window.scrollY > 10 ? setTextColor("text-white") : setTextColor("text-black");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);

  return (
    <header className={`transition-all fixed flex flex-row justify-between px-4 items-center w-full z-50 ${navSize} ${navColor}`}>
  <div className={`items-center bg-transparent ${textColor}`}>
    <IoSearchOutline className='lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]' />
  </div>
  <div className={`bg-transparent items-center ${textColor}`}><p className='font-nature lg:text-4xl md:text-2xl text-xl'>Ectore</p></div>
  <div className={`bg-transparent flex items-center flex-row gap-4 ${textColor}`}>
    <RiShoppingCart2Line className='lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]' />
    <CgProfile className='lg:w-[35px] lg:h-[35px] md:w-[30px] md:h-[30px] w-[25px] h-[25px]' />
  </div>
</header>
  )
}

export default Navbar