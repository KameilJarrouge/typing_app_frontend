import React from 'react'
import '../Components/Welcome.css'
const Welcome = () => {
  return (
    <div className='flex flex-col w-full h-[100vh] justify-center'>
      <div className=''>
        <div className=' text-cyan-950'>Start Now</div>
        <div>
          <button className=' bg-cyan-300 w-30 rounded-full p-3 px-6 m-9'>Login</button>
          <button className=' bg-cyan-300 w-30 rounded-full p-3 px-6 '>SignUp1</button>
        </div>
      </div>
    </div>
  )
}

export default Welcome
