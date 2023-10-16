import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'

const Home = () => {
  return (
    <main className=' w-full min-h-full flex-col' >
      <div>
      <Navbar />
      </div>
      <div className='flex w-full h-full'>
       <Sidebar />
       {/* <Content /> */}
      </div>
    </main>
  )
}

export default Home
