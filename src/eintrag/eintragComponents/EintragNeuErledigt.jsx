import React, { useRef } from 'react'

const EintragNeuErledigt = ({setErledigt}) => {

  const erledigt = useRef()

  
  return (
    <div className='flex px-10 border border-white pt-2 m-2 rounded-md'>
      <span className='text-sm font-semibold font-serif mb-2'>bereits Erledigt</span>
      <div className='flex flex-col ml-[30%]'>
      <label>
        <input ref={erledigt} type='checkbox' id='erledigtNeu' name='erledigtNeu' onChange={() => setErledigt(erledigt.current.value)}/>
      </label>
      </div>
    </div>
  )
}

export default EintragNeuErledigt