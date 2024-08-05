import React from 'react'

const Suche = () => {


  return (
    <div className='px-6 border border-white py-2 m-2 rounded-md'>
      <p className='grid justify-items-start pl-5 text-sm text-white font-semibold font-serif'>Textsuche</p>
      <input type='text' placeholder='Textsuche...' className='w-full mt-2 pl-4 rounded-md outline-none'></input>
    </div>
  )
}

export default Suche