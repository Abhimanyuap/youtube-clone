import React from 'react';
import {RxHamburgerMenu} from "react-icons/rx"
import {BsYoutube} from "react-icons/bs"
import {GoSearch} from "react-icons/go"
import {BiSolidMicrophone} from "react-icons/bi"
import {MdVideoCall} from "react-icons/md"
import {BsBell} from "react-icons/bs"
import {RxAvatar} from "react-icons/rx"

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center h-16 px-8'>
      <div className='flex justify-start h-full w-40 items-center gap-4'>
        <div>
        <RxHamburgerMenu size={30} />
        </div>
        <div className='flex gap-2'>
          <BsYoutube size={30} />
          <span>Youtube <sup>IN</sup> </span>   
        </div>
      </div>
      <div className='flex justify-center items-center h-full w-auto'>
        <input className='w-96 h-10 p-3 border-2 border-gray-300 border-r-0  outline-none rounded-s-full' />
        <button className='bg-white h-10 w-10 border-2 border-gray-300 border-l-0 rounded-e-full '>
          <GoSearch size={30} />
        </button>
        <span className='h-10 w-10 flex items-center justify-center  ml-4 bg-slate-300 rounded-full'>
        <BiSolidMicrophone  size={30}/>
        </span>
      </div>
      <div className='h-full w-40 flex justify-between items-center'>
         <MdVideoCall size={30} />
         <BsBell size={30} />
         <RxAvatar  size={30}/>
         {/* <img src='' alt='avatar' /> */}
      </div>
    </nav>
  )
}

export default Navbar
