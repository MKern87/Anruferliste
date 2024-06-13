import React from 'react'

const EintragNeuText = () => {




  return (
    <div className='grid grid-cols-1 mt-2 border border-white px-8 my-4 rounded-md py-2'>
      <p className='text-sm font-semibold font-serif mb-2'>Anliegen/Grund (kurzer Text)</p>
      <textarea id='textareaNeu'>
      </textarea>
    </div>
  )
}

export default EintragNeuText