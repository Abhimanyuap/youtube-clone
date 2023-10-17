import React from 'react';
import {BiSolidHomeAlt2} from "react-icons/bi";
import {BsPlayBtn} from "react-icons/bs";
import {BsCollectionPlay} from "react-icons/bs";
import {MdOutlineVideoLibrary} from "react-icons/md"

const Sidebar = () => {
  return (
    <section className=' grid grid-cols-1 gap-y-12 px-3 py-6'>
      <span className='h-16 w-20 flex flex-col justify-center items-center '>
      <BiSolidHomeAlt2 size={30} />
       <p className='text-xs'>Home</p>
      </span>
      <span className='h-16 w-20 flex flex-col justify-center items-center '>
      <BsPlayBtn size={30} />
      <p className='text-xs'>Shorts</p>
      </span>
      <span className='h-16 w-20 flex flex-col justify-center items-center '>
      <BsCollectionPlay size={30} />
      <p className='text-xs'>Subscriptions</p>
      </span>
      <span className='h-16 w-20 flex flex-col justify-center items-center '>
      <MdOutlineVideoLibrary size={30} />
      <p className='text-xs'>Library</p>
      </span>
    </section>
  )
}

export default Sidebar
