import React from 'react'

const Tut = () => {
  return (
    
    <div className='grid grid-cols-4 gap-5'>

    {
      Array(12).fill(0).map((item,index)=>(
     <div key={index}>
      <img alt="" src={'./images/0.webp'}/>
     </div>
      ))
    }
    
    </div>
   
  )
}

export default Tut
