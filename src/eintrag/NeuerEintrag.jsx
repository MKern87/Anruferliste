import React, { useEffect, useState } from 'react'
import EintragNeuMitarbeiter from './eintragComponents/EintragNeuMitarbeiter'
import EintragNeuArt from './eintragComponents/EintragNeuArt'
import EintragNeuDatum from './eintragComponents/EintragNeuDatum'
import { Link } from 'react-router-dom'
import EintragNeuKunde from './eintragComponents/EintragNeuKunde'
import EintragNeuText from './eintragComponents/EintragNeuText'
import EintragNeuErledigt from './eintragComponents/EintragNeuErledigt'
import EintragNeuRückrufWer from './eintragComponents/EintragNeuRückrufWer'


const NeuerEintrag = () => {

  const [mitarbeiter, setMitarbeiter] = useState("")


  const createData = async () => {
    try {
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: {
          'key': JSON.stringify(mitarbeiter)
        } 
        // objekt oder array ?
      };
  
      const res = await fetch('http://localhost/anruferliste/backend/eintragNeu.php', request);
      const newData = await res.json();
  
      return newData;
  
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    console.log(mitarbeiter)
  },[mitarbeiter])


  return (
    <div className='fixed flex justify-center items-center w-screen h-screen bg-gray-800'>
      <div className='w-[90%] h-[90%] rounded-md bg-blue-200 flex justify-center items-center'>
        <div className='grid grid-cols-4'>
          <div className='mx-2'>
            {<EintragNeuMitarbeiter setMitarbeiter = {setMitarbeiter} />}
          </div>
          <div className='mx-2'>
            {<EintragNeuArt />}
          </div>
          <div className='mx-2'>
            {<EintragNeuDatum />}
          </div>
          <div className='mx-2'>
            {<EintragNeuKunde />}
          </div>
          <div className='mx-2 col-span-2'>
            {<EintragNeuText />}
          </div>
          <div className='mx-2'>
            {<EintragNeuErledigt />}
          </div>
          <div className='mx-2'>
            {<EintragNeuRückrufWer />}
          </div>
          <div className=' space-x-6'>
            <button className='bg-white rounded-md border border-black px-2 w-26'>
              <Link to={'/'}>abbrechen</Link>
            </button>
            <button className='bg-white rounded-md border border-black px-2 w-26' onClick={() => {
              createData({
                Mitarbeiter: document.getElementById('mitarbeiterNeu').value,
                Art: document.getElementById('artNeu').value,
                Datum: document.getElementById('datumNeu').value,
                Kunde: document.getElementById('kundeNeu').value,
                Text: document.getElementById('textareaNeu').value,
                Erledigt: document.getElementById('erledigtNeu').checked,
                Rückrufer: document.getElementById('mitarbeiterRRneu').value
              })
            }}>
              speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NeuerEintrag