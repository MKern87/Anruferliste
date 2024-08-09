import React, { useEffect, useState } from 'react'
import { DatenabrufArt } from './functionhandler';

const Art = () => {

  const [artData, setArtData] = useState([])

  // Datenabruf Art
  const artDaten = async() => {

    const data = await DatenabrufArt()

    if(data.artData) {
      setArtData(data.artData)
    }
  }

  useEffect(() => {
    artDaten()
  },[])


  return (
    <div className='grid grid-cols-1 border border-white my-6 px-8 rounded-md py-2'>
      <p className='text-sm text-white font-semibold font-serif mb-3 flex flex-col items-center'>Art</p>
      <select className='w-full text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='art'>
      <option value=''>Alle</option>
        {
          artData?.length > 0 && artData?.map((item, index) => (
            <option key={index} value={item.art}>
            {item.art}
          </option>
          ))
        }
        
      </select>
    </div>
  )
}

export default Art