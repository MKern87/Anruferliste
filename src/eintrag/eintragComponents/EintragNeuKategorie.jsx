import React, { useEffect, useRef, useState } from 'react'
import { DatenabrufKategorie } from '../../mainpage/mainpageComponents/functionhandler'

const EintragNeuKategorie = ({setKategorie}) => {

  const [kategorieData, setKategorieData] = useState([])
  const kategorie = useRef('')

  // Datenabruf Kategorie
  const kategorieDaten = async() => {

    const data = await DatenabrufKategorie()

    if(data.kategorieData) {
      setKategorieData(data.kategorieData)
    }
  }

  useEffect(() => {
    kategorieDaten()
  }, [])

    return (
      <div className='grid grid-cols-1 mt-2 border border-white px-8 my-4 rounded-md py-2'>
        <p className='text-sm font-semibold font-serif mb-2'>Kategorie</p>
        <select ref={kategorie} className='w-full text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='kategorieNeu' onChange={() => setKategorie(kategorie.current.value)}>
        <option>Kategorie auswählen...</option>
          {
            kategorieData?.length > 0 && kategorieData?.map((item, index) => (
              <option key={index} value={item.kategorie}>
              {item.kategorie}
            </option>
            ))
          }
          
        </select>
      </div>
    )
  }

export default EintragNeuKategorie