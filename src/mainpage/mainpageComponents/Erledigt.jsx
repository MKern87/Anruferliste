import React from 'react'

const Erledigt = () => {




  return (
    <div className='h-[168px] grid grid-row-2 px-6 border border-white py-2 m-2 rounded-md'>
      <span className='text-sm font-semibold font-serif mb-2'>Erledigt</span>
      <div className='flex flex-col ml-[30%]'>
      <label>
        <input type='radio' id='erledigt1' value='ja' name='erledigt'/>
        Ja
      </label>
      <label className='py-2'>
        <input type='radio' id='erledigt0' value='nein' name='erledigt'/>
        Nein
      </label>
      <label>
        <input type='radio' id='erledigt2' value='alle' name='erledigt'/>
        Alle
      </label>
      </div>
    </div>
  )
}

export default Erledigt