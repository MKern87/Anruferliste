import React from 'react'

const EintragNeuErledigt = () => {



  
  return (
    <div className='flex px-10 border border-white pt-2 m-2 rounded-md'>
      <span className='text-sm font-semibold font-serif mb-2'>bereits Erledigt</span>
      <div className='flex flex-col ml-[30%]'>
      <label>
        <input type='checkbox' id='erledigtNeu' name='erledigtNeu'/>
      </label>
      </div>
    </div>
  )
}

export default EintragNeuErledigt