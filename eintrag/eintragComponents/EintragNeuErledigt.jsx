import React, { useRef } from 'react'

const EintragNeuErledigt = ({setErledigt}) => {

  const erledigt = useRef()
  
  return (
    <div className='flex items-center justify-center border border-white rounded-md py-1'>
      <span className='text-sm font-semibold font-serif'>bereits Erledigt &nbsp;</span>
      <label>
        <input ref={erledigt} type='checkbox' id='erledigtNeu' name='erledigtNeu' onChange={() => setErledigt(erledigt.current.value)}/>
      </label>
    </div>
  )
}

export default EintragNeuErledigt