import React, { useEffect, useState } from 'react'
import { DatenabrufMitarbeiter } from './functionhandler';

const Mitarbeiter = () => {
  
  const [mitarbeiterData, setMitarbeiterData] = useState([])

  
  //Datenabruf Mitarbeiter
  const mitarbeiterDaten = async () => {

    const data = await DatenabrufMitarbeiter()

       if (data.mitarbeiterData) {
         setMitarbeiterData(data.mitarbeiterData);
       }
  };
  
  useEffect(() => {
    mitarbeiterDaten();
  },[])

  return (
    <div className='grid grid-cols-1 mt-2 border border-white px-8 my-4 rounded-md py-2'>
      <p className='text-sm text-white font-semibold font-serif mb-2 flex flex-col items-center'>Mitarbeiter</p>
      <select className='w-full text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' id='mitarbeiter'>
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
  )
}

export default Mitarbeiter