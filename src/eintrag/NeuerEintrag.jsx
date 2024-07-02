import React, { useEffect, useState } from 'react'
import EintragNeuMitarbeiter from './eintragComponents/EintragNeuMitarbeiter'
import EintragNeuArt from './eintragComponents/EintragNeuArt'
import EintragNeuDatum from './eintragComponents/EintragNeuDatum'
import { Link } from 'react-router-dom'
import EintragNeuKunde from './eintragComponents/EintragNeuKunde'
import EintragNeuText from './eintragComponents/EintragNeuText'
import EintragNeuErledigt from './eintragComponents/EintragNeuErledigt'
import EintragNeuRueckrufWer from './eintragComponents/EintragNeuRueckrufWer'
import EintragNeuKategorie from './eintragComponents/EintragNeuKategorie'
import EintragNeuRueckruf from './eintragComponents/EintragNeuRueckruf'
import EintragNeuDatumRR from './eintragComponents/EintragNeuDatumRR'


const NeuerEintrag = () => {

  const [mitarbeiter, setMitarbeiter] = useState('')
  const [art, setArt] = useState('')
  const [eintragDatum, setEintragDatum] = useState('')
  const [kunde, setKunde] = useState('')
  const [kategorie, setKategorie] = useState('')
  const [rueckruf, setRueckruf] = useState(false)
  const [datumRueckruf, setDatumRueckruf] = useState('')
  const [aktuellerText, setAktuellerText] = useState('')
  const [erledigt, setErledigt] = useState(false)
  const [mitarbeiterRR, setMitarbeiterRR] = useState('')


  const createData = async () => {
    console.log([mitarbeiter, art, eintragDatum, kunde, kategorie, rueckruf, datumRueckruf, aktuellerText, erledigt, mitarbeiterRR])
    try {
      const request = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
              mitarbeiter, 
              art, 
              eintragDatum, 
              kunde, 
              kategorie, 
              rueckruf, 
              datumRueckruf, 
              aktuellerText, 
              erledigt, 
              mitarbeiterRR
            })
        
      };
  
      const res = await fetch('http://localhost/anruferliste/backend/eintragNeu.php', request);
      const newData = await res.json();
      // const text = await res.text();
      // console.log('Server response:', text);
      // const newData = JSON.parse(text);
  
      return newData;
  
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  console.log(createData())

  useEffect(() => {
    // console.log(mitarbeiter)
  },[mitarbeiter, art, eintragDatum, kunde, rueckruf, datumRueckruf, aktuellerText, erledigt, mitarbeiterRR])


  return (
    <div className='fixed flex justify-center items-center w-screen h-screen bg-gray-800'>
      <div className='w-[90%] h-[90%] rounded-md bg-blue-200 flex justify-center items-center'>
        <div className='grid grid-cols-4'>
          <div className='mx-2'>
            <EintragNeuMitarbeiter setMitarbeiter={setMitarbeiter} />
          </div>
          <div className='mx-2'>
            <EintragNeuArt setArt={setArt} />
          </div>
          <div className='mx-2'>
            <EintragNeuDatum setEintragDatum={setEintragDatum} />
          </div>
          <div className='mx-2'>
            <EintragNeuKunde setKunde={setKunde} />
          </div>
          <div className='mx-2'>
            <EintragNeuKategorie setKategorie={setKategorie} />
          </div>
          {/* <div className='mx-2'>
            {<EintragNeuDauer/>}
          </div> */}
           <div className='mx-2'>
            <EintragNeuRueckruf setRueckruf={setRueckruf} />
          </div>
          <div className='mx-2'>
            <EintragNeuDatumRR setDatumRueckruf={setDatumRueckruf} />
          </div>
          <div className='mx-2 col-span-2'>
            <EintragNeuText setAktuellerText={setAktuellerText} />
          </div>
          <div className='mx-2'>
            <EintragNeuErledigt setErledigt={setErledigt} />
          </div>
          <div className='mx-2'>
            <EintragNeuRueckrufWer setMarbeiterRR={setMitarbeiterRR} />
          </div>
          <div className=' space-x-6'>
            <button className='bg-white rounded-md border border-black px-2 w-26'>
              <Link to={'/'}>abbrechen</Link>
            </button>
            <button className='bg-white rounded-md border border-black px-2 w-26' onClick={createData}>
              speichern
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NeuerEintrag