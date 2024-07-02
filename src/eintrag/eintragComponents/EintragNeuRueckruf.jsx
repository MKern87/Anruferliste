import React, { useRef } from 'react'

const EintragNeuRueckruf = ({setRueckruf}) => {

  const rueckruf = useRef()

  return (
    <div className='flex px-10 border border-white pt-2 m-2 rounded-md'>
      <span className='text-sm font-semibold font-serif mb-2'>Rückruf gewünscht</span>
      <div className='flex flex-col ml-[30%]'>
      <label>
        <input ref={rueckruf} type='checkbox' id='erledigtNeu' name='rueckrufNeu' onChange={() => setRueckruf(rueckruf.current.value)}/>
      </label>
      </div>
    </div>
  )
}

export default EintragNeuRueckruf