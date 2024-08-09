import React, { useEffect, useState } from 'react'

const DatenAnrufe = () => {

  // const [anrufeData, setAnrufeData] = useState([])

  // const anrufDaten = async () => {

  //   const data = await DatenabrufAnrufe()

  //   if(data.anrufeData) {
  //     setAnrufeData(data.anrufeData)
  //   }
  //   console.log(data)
  // }

  // useEffect(() => {
  //   anrufDaten()
  // },[])

  const daten = [
  {
    handelspartner_id: 'kunde',
    text: 'testtest',
    art_id: 'telefon',
    mitarbeiter_id: 'Fernando',
    kategorie_id: 'Testttt',
    datum: '08.08.2024',
    dauer: '00:00:45'
  },
  {
    handelspartner_id: 'kunde2',
    text: 'testtexttest',
    art_id: 'whats app',
    mitarbeiter_id: 'Bernd',
    kategorie_id: '1234',
    datum: '09.08.2024',
    dauer: '00:00:30'
  }
  ]

  // const filteredData = daten.filter(item => {
  //   return new Date(item.datum).toLocaleDateString() === new Date(currentDate).toLocaleDateString()
  // })

  return (
      <div className='cursor-pointer bg-gray-700 max-h-fit' >
    {
      // anrufeData?.length > 0 && anrufeData?.map((item, index) => (
          daten.length > 0 && daten.map((item, index) =>(
          <div key={index} className='grid col-span-1 border border-black bg-gray-300 rounded-md m-1 py-2'>
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