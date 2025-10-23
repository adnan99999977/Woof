import React from 'react'

const Loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <span className="loading loading-bars loading-xl"></span>
        <span className="loading loading-bars loading-xl rotate-180"></span>
       
    </div>
  )
}

export default Loading