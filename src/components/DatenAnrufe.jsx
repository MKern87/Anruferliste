import React, { useEffect, useState } from 'react'
import { DatenabrufAnrufe } from '../mainpage/mainpageComponents/functionhandler'

const DatenAnrufe = () => {

  const [anrufeData, setAnrufeData] = useState([])

  const anrufDaten = async () => {

    const data = await DatenabrufAnrufe()

    if(data.anrufeData) {
      setAnrufeData(data.anrufeData)
    }
    console.log(data)
  }

  useEffect(() => {
    anrufDaten()
  },[])

  return (
    <div>
      {
        anrufeData?.length > 0 && anrufeData?.map((item, index) => (
          <div key={index} className='w-full grid col-span-1 border border-black bg-gray-300 rounded-md m-1 py-2'>
            <div className=' justify-items-start pl-1'>
              <div>Kunde: {item.handelspartner_id}</div>
              <div>Text: {item.text}</div>
              <div>Art: {item.art_id}</div>
              <div>Mitarbeiter: {item.mitarbeiter_id}</div>
              <div>Kategorie: {item.kategorie_id}</div>
              <div>Datum: {item.datum}</div>
              <div>Dauer: {item.dauer}</div>
              <div>Rückruf:
                {
                  item.rueckruf == 0
                  ? <input disabled checked={false} type='checkbox'/> 
                  : <input disabled checked type='checkbox' />
                }
              {/* {console.log(item.rueckruf)} */}
              </div>
              <div>Rückrufer: {item.rueckrufWer}</div>
              <div>Datum Rückruf:{item.datumRueckruf}</div>
              <div>Erledigt: 
                {
                item.erledigt == 0 
                ? <input disabled checked={false}  type='checkbox' /> 
                : <input disabled checked  type='checkbox' />
                }
                {/* {console.log(item.erledigt)} */}
              </div>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default DatenAnrufe