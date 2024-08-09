import React from 'react'

const Datum = () => {

  return (
    <div className='h-[168px] grid grid-row-2 items-center justify-items-center px-6 border border-white py-2 m-2 rounded-md'>
      <span className=''>
        <p className='text-sm text-white font-semibold font-serif'>Von:</p> 
        <input type='date'/>
      </span>
      <span className='pt-2'>
        <p className='text-sm text-white font-semibold font-serif'>
        Bis:
        </p>
        <input type='date' />
      </span>
      <span className='pt-4'>
        <input type='checkbox'/>
        <p className='text-sm text-white font-semibold font-serif float-right'>aktuelle Anrufe</p>
      </span>
    </div>
  )
}

export default Datum