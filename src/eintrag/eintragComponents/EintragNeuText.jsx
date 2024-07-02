import React, { useRef } from 'react'

const EintragNeuText = ({setAktuellerText}) => {

  const aktuellerText = useRef('')


  return (
    <div className='grid grid-cols-1 mt-2 border border-white px-8 my-4 rounded-md py-2'>
      <p className='text-sm font-semibold font-serif mb-2'>Anliegen/Grund (kurzer Text)</p>
      <textarea ref={aktuellerText} id='textareaNeu' onChange={() => setAktuellerText(aktuellerText.current.value)}>
      </textarea>
    </div>
  )
}

export default EintragNeuText