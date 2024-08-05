import React, { useEffect, useRef, useState } from 'react'
import { DatenabrufMitarbeiter } from '../../mainpage/mainpageComponents/functionhandler';

const EintragNeuMitarbeiter = ({setMitarbeiter}) => {
  
  const [mitarbeiterData, setMitarbeiterData] = useState([])

  const mArbeiter = useRef('')
  
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
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <p className='text-sm font-semibold font-serif mb-2'>Entgegengenommen von Mitarbeiter</p>
      <select 
      ref={mArbeiter} 
      className='w-1/2 text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer' 
      id='mitarbeiterNeu' 
      onChange={() => setMitarbeiter(mArbeiter.current.value)}
      >
      <option>Mitarbeiter auswählen...</option>
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

export default EintragNeuMitarbeiter