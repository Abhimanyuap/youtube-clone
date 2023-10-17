import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Content from '../components/content/Content'

const Home = () => {
  return (
    <main className=' w-full min-h-full flex flex-col' >
      <div>
      <Navbar />
      </div>
      <div className='flex w-full h-full'>
       <Sidebar />
       <Content />
      </div>
    </main>
  )
}

export default Home
