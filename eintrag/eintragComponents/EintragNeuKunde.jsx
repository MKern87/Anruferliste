import React, { useEffect, useRef, useState } from 'react'
import { DatenabrufKunden } from '../../mainpage/mainpageComponents/functionhandler'

const EintragNeuKunde = ({setKunde}) => {

  const [handelspartnerData, setHandelspartnerData] = useState([])
  const kunde = useRef('')

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
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <p className='text-sm font-semibold font-serif mb-2'>Von Kunde</p>
      <select ref={kunde} className='w-1/2 text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='kundeNeu' onChange={() => setKunde(kunde.current.value)}>
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