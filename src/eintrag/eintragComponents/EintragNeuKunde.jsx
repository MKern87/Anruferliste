import React, { useEffect, useState } from 'react'
import { DatenabrufKunden } from '../../mainpage/mainpageComponents/functionhandler'

const EintragNeuKunde = () => {

  const [handelspartnerData, setHandelspartnerData] = useState([])

  const kundenDaten = async () => {

    const data = await DatenabrufKunden()

    if (data.handelspartnerData) {
      setHandelspartnerData(data.handelspartnerData)
    }

  }

  useEffect(() => {
    kundenDaten();
  },[])


  return (
    <div className='grid grid-cols-1 mt-2 border border-white px-8 my-4 rounded-md py-2'>
      <p className='text-sm font-semibold font-serif mb-2'>Von Kunde</p>
      <select className='w-full text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='kundeNeu'>
      <option>Kunden auswählen...</option>
      {
        handelspartnerData?.length > 0 && handelspartnerData?.map((item, index) => (
          <option key={index} value={item.suchbegriff}>
            {item.suchbegriff}
          </option>
        ))
      }
      </select>
   </div>
  )
}

export default EintragNeuKunde