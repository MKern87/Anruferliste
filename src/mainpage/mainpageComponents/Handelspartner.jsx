import { keyboard } from '@testing-library/user-event/dist/keyboard'
import React, { useEffect, useState } from 'react'
import { DatenabrufKunden } from './functionhandler'
import NeuerEintrag from '../../eintrag/NeuerEintrag'

const Handelspartner = () => {

  const [showDropdown, setShowDropdown] = useState(false)
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
  <div className='h-[168px] grid px-6 border border-white py-2 m-2 rounded-md relative'>
    <span className='text-sm text-white font-semibold font-serif mb-2'>Kunde auswählen:</span>
      <div className='h-10 cursor-pointer relative' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
        Kunden auswählen
        {showDropdown && (
          <div className='absolute w-[600px] border border-white bg-blue-200 px-2 py-2 rounded-md'>
            {handelspartnerData?.length > 0 && handelspartnerData?.map((item, index) => (
              <div key={index} className='bg-red-200 border-white rounded-md p-2 mb-2'>
                  <span>Suchbegriff: {item.suchbegriff}</span><br></br>
                  <span>Name1: {item.name1}</span><br></br>
                  <span>Name2: {item.name2}</span><br></br>
                  <span>Adresse: {item.adresse}</span><br></br>
                  <span>Telefon: {item.telefon}</span><br></br>
                  <span>Memo: {item.memo}</span><br></br>
              </div>
            ))}
          </div>
        )}
      </div>
  </div>
  )
}

export default Handelspartner