import React, { useEffect, useRef, useState } from 'react'
import { DatenabrufArt } from '../../mainpage/mainpageComponents/functionhandler'

const EintragNeuArt = ({setArt}) => {
  const [artData, setArtData] = useState([])

  const art = useRef('')

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
    <div className='grid grid-cols-1 mt-2 border border-white px-8 my-4 rounded-md py-2'>
      <p className='text-sm font-semibold font-serif mb-2'>Art der Kommunikation</p>
      <select ref={art} className='w-full text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='artNeu' onChange={() => setArt(art.current.value)}>
      <option>Art auswählen...</option>
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

export default EintragNeuArt