import React, { useRef } from 'react'

const EintragNeuRueckruf = ({setRueckruf}) => {

  const rueckruf = useRef()

  return (
    <div className='flex items-center justify-center mt-2 border border-white rounded-md py-1'>
      <span className='text-sm font-semibold font-serif'>Rückruf gewünscht &nbsp;</span>
      <label>
        <input ref={rueckruf} type='checkbox' id='erledigtNeu' name='rueckrufNeu' onChange={() => setRueckruf(rueckruf.current.value)}/>
      </label>
    </div>
  )
}

export default EintragNeuRueckruf