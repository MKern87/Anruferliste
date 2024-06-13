import React, { useEffect, useState } from 'react'
import { DatenabrufMitarbeiter } from '../../mainpage/mainpageComponents/functionhandler'

const EintragNeuRückrufWer = () => {

  const [mitarbeiterData, setMitarbeiterData] = useState([])
  
  //Datenabruf Mitarbeiter
  const mitarbeiterDaten = async() => {

      const data = await DatenabrufMitarbeiter()
  
         if (data && data.mitarbeiterData && data.mitarbeiterData.length > 0) {
           setMitarbeiterData(data.mitarbeiterData);
           console.log(data)
         }


    if(data) {
      setMitarbeiterData(data.mitarbeiterData)
    }

  }

  useEffect(() => {
    mitarbeiterDaten();
  },[])


  return (
    <div className='grid grid-cols-1 mt-2 border border-white px-8 my-4 rounded-md py-2'>
      <p className='text-sm font-semibold font-serif mb-2'>Rückruf gewünscht von</p>
      <select className='w-full text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer mt-3' id='mitarbeiterRRneu'>
          <option value=''>Mitarbeiter auswählen...</option>
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

export default EintragNeuRückrufWer