import React, { useEffect, useRef, useState } from 'react'
import { DatenabrufMitarbeiter } from '../../mainpage/mainpageComponents/functionhandler'

const EintragNeuRückrufWer = ({setMarbeiterRR}) => {

  const [mitarbeiterData, setMitarbeiterData] = useState([])
  const mArbeiterRR = useRef('')
  
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
    <div className='h-full flex flex-col items-center justify-center py-2 mt-2 border border-white rounded-md'>
      <p className='text-sm font-semibold font-serif mb-2'>Rückruf gewünscht von</p>
      <select ref={mArbeiterRR} className='w-1/2 text-left text-sm border border-solid relative border-black rounded-sm bg-slate-100 cursor-pointer mt-3' id='mitarbeiterRRneu' onChange={() => setMarbeiterRR(mArbeiterRR.current.value)}>
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