import React from 'react'

const Suggestions = () => {
  return (
    <div style={{width : "90vw"}} className=' w-full h-8 flex items-center'>
      <ul className='list-none w-full flex justify-between'>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>All</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>React</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>Movies</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>News</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>Entertainment</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>Games</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>Javascript</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>Web Development</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>Hacking</li>
        <li className='w-fit h-fit px-3 rounded-lg bg-slate-200'>DSA</li>
      </ul>
    </div>
  )
}

export default Suggestions
