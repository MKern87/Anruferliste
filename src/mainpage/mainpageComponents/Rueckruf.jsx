import React, { useEffect, useState } from 'react'
import { DatenabrufMitarbeiter } from './functionhandler'

const Rueckruf = () => {

  const [mitarbeiterData, setMitarbeiterData] = useState([])
  
  //Datenabruf Mitarbeiter
  const mitarbeiterDaten = async() => {

      const data = await DatenabrufMitarbeiter()
  
         if (data && data.mitarbeiterData && data.mitarbeiterData.length > 0) {
           setMitarbeiterData(data.mitarbeiterData);
          //  console.log(data)
         }


    if(data) {
      setMitarbeiterData(data.mitarbeiterData)
    }

  }

  useEffect(() => {
    mitarbeiterDaten();
  },[])

  return (
    <div className='h-[168px] grid grid-row-2 px-6 border border-white py-2 m-2 rounded-md'>
      <span className='text-sm font-semibold font-serif mb-2'>Rückruf</span>
        <div className="flex items-center justify-center">
          <label className=''>
            <input type='radio' id='rueckruf1' value='ja' name='rueckruf'/>
            Ja
          </label>
          <label className='mx-4'>
            <input type='radio' id='rueckruf0' value='nein' name='rueckruf'/>
            Nein
          </label>
          <label>
            <input type='radio' id='rueckruf2' value='alle' name='rueckruf'/>
            Alle
          </label>
        </div>
      <div className='mt-9'>
        <span className='text-sm font-semibold font-serif'>Welcher Mitarbeiter</span>
        <select className='w-full text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer mt-3' id='mitarbeiter'>
          <option value=''>Alle</option>
            {
            mitarbeiterData?.length > 0 && mitarbeiterData?.map((item, index) => (
              <option key={index} value={item.mitarbeiter}>
                {item.mitarbeiter}
              </option>
            ))
            }
          </select>
        </div>
      </div>
  )
}

export default Rueckruf