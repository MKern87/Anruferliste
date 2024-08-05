import React, { useEffect, useState } from 'react'
import EintragNeuMitarbeiter from './eintragComponents/EintragNeuMitarbeiter'
import EintragNeuArt from './eintragComponents/EintragNeuArt'
import EintragNeuDatum from './eintragComponents/EintragNeuDatum'
import { Link, useNavigate } from 'react-router-dom'
import EintragNeuKunde from './eintragComponents/EintragNeuKunde'
import EintragNeuText from './eintragComponents/EintragNeuText'
import EintragNeuErledigt from './eintragComponents/EintragNeuErledigt'
import EintragNeuRueckrufWer from './eintragComponents/EintragNeuRueckrufWer'
import EintragNeuKategorie from './eintragComponents/EintragNeuKategorie'
import EintragNeuRueckruf from './eintragComponents/EintragNeuRueckruf'
import EintragNeuDatumRR from './eintragComponents/EintragNeuDatumRR'
import Timer from '../components/Timer'


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
  const [dauer, setDauer] = useState('')
  const [isPopupOpen, setIsPopupOpen] = useState(true)
  const navigate = useNavigate()


  const createData = async () => {
    console.log([mitarbeiter, art, eintragDatum, kunde, kategorie, rueckruf, datumRueckruf, aktuellerText, erledigt, mitarbeiterRR, dauer])
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
              mitarbeiterRR,
              dauer
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

  const handleSubmitData = async() => {
    createData()
    setIsPopupOpen(false);
    navigate('/')
  }


  return (
    isPopupOpen && (
    <div className='fixed flex justify-center items-center w-screen h-screen bg-gray-800'>
      <div className='w-[90%] h-[90%] rounded-md bg-blue-200'>
        <div className='grid grid-cols-4 gap-4 p-4'>
          <div className='col-span-1'>
            <EintragNeuMitarbeiter setMitarbeiter={setMitarbeiter} />
          </div>
          <div className='col-span-1'>
            <EintragNeuArt setArt={setArt} />
          </div>
          <div className='flex justify-between col-span-1'>
            <div>
              <EintragNeuDatum setEintragDatum={setEintragDatum} />
            </div>
            <div>
              <EintragNeuDatumRR setDatumRueckruf={setDatumRueckruf} />
            </div>
          </div>
          <div className='col-span-1'>
            <EintragNeuKunde setKunde={setKunde} />
          </div>
          <div className='col-span-1'>
            <EintragNeuKategorie setKategorie={setKategorie} />
          </div>
          <div className='flex flex-col justify-between col-span-1'>
            <div>
              <EintragNeuRueckruf setRueckruf={setRueckruf} />
            </div>
            <div>
              <EintragNeuErledigt setErledigt={setErledigt} />
            </div>
          </div>
          <div className='col-span-1'>
            <EintragNeuRueckrufWer setMarbeiterRR={setMitarbeiterRR} />
          </div>
          <div className='col-span-1'>
            <Timer isPopupOpen={isPopupOpen} setDauer={setDauer} />
          </div>
          <div className='col-span-3 h-auto'>
            <EintragNeuText setAktuellerText={setAktuellerText} />
          </div>
        </div>
          <div className='flex justify-center mt-4'>
            <button className='bg-white rounded-md border border-black px-2 w-26 mx-2'>
              <Link to={'/'}>abbrechen</Link>
            </button>
            <button className='bg-white rounded-md border border-black px-2 w-26 mx-2' onClick={handleSubmitData}>
              speichern
            </button>
          </div>
      </div>
    </div>
    )
  )
}

export default NeuerEintrag